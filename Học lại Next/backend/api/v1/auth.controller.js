const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Black_list_token } = require("../../models/index");
module.exports = {
  login: async (req, res) => {
    // Xác thực
    // Lấy user từ email, so sánh hash, lưu thông tin User bằng JWT
    const response = {};
    const { email, password } = req.body;
    if (!email || !password) {
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
      });
    } else {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        Object.assign(response, {
          status: 400,
          message: "Bad Request",
        });
      } else {
        const result = bcrypt.compareSync(password, user.password);
        if (!result) {
          Object.assign(response, {
            status: 400,
            message: "Bad Request",
          });
        } else {
          // Lưu thông tin vào JWT
          const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH_EXPIRE } = process.env;
          const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRE,
          });
          const refreshToken = jwt.sign(
            { random: new Date().getTime() + Math.random() },
            JWT_SECRET,
            {
              expiresIn: JWT_REFRESH_EXPIRE,
            }
          );
          // Lưu refresh vào database
          await User.update(
            { refresh_token: refreshToken },
            { where: { id: user.id } }
          );
          Object.assign(response, {
            status: 200,
            message: "Success",
            data: {
              accessToken,
              refreshToken,
            },
          });
        }
      }
    }

    res.status(response.status).json(response);
  },
  profile: async (req, res) => {
    // Lấy token
    // Decode token --> Payload
    // Truy vấn Database --> Trả về thông tin user
    const response = {
      status: 200,
      mess: "Success",
      data: req.user,
    };
    res.status(response.status).json(response);
  },
  logout: async (req, res) => {
    // Đưa accessToken vào blackList
    /**
     * Lưu blackList: database, file, redis
     */
    const { accessToken: token, expired } = req.user;
    await Black_list_token.findOrCreate({
      where: { token },
      defaults: {
        token,
        expired,
      },
    });

    res.status(200).json({ status: 200, message: "Success" });
  },
  refresh: async (req, res) => {
    const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH_EXPIRE } = process.env;
    const { refreshToken } = req.body;
    const response = {};
    if (!refreshToken) {
      Object.assign(response, {
        status: 401,
        message: "Unauthorized",
      });
    } else {
      try {
        jwt.verify(refreshToken, JWT_SECRET);
        const user = await User.findOne({
          where: { refresh_token: refreshToken },
        });
        if (!user) {
          Object.assign(response, {
            status: 401,
            message: "Unauthorized",
          });
        } else {
          const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRE,
          });
          const refreshToken = jwt.sign(
            { random: new Date().getTime() + Math.random() },
            JWT_SECRET,
            {
              expiresIn: JWT_REFRESH_EXPIRE,
            }
          );
          await User.update(
            { refresh_token: refreshToken },
            { where: { id: user.id } }
          );
          Object.assign(response, {
            status: 200,
            message: "Success",
            data: {
              accessToken,
              refreshToken,
            },
          });
        }
      } catch (error) {
        Object.assign(response, {
          status: 401,
          message: "Unauthorized",
        });
      }
    }
    res.status(response.status).json(response);
  },
};
