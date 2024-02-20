const jwt = require("jsonwebtoken");
const { User, Black_list_token } = require("../../models/index");

module.exports = async (req, res, next) => {
  const { JWT_SECRET, JWT_EXPIRE } = process.env;
  const response = {};
  const token = req.get("Authorization")?.split(" ")[1];
  if (!token) {
    Object.assign(response, {
      status: 401,
      mess: "Unauthorized",
    });
  } else {
    try {
      const existToken = await Black_list_token.findOne({ where: { token } });
      if (existToken) throw new Errow("Token in black list");
      const { userId, exp } = jwt.verify(token, JWT_SECRET);
      const user = await User.findByPk(userId, {
        attributes: { exclude: ["password", "refresh_token"] },
      });
      if (!user) throw new Error("User not exist");
      req.user = {
        ...user.dataValues,
        accessToken: token,
        expired: new Date(exp * 1000),
      };
      return next();
    } catch (error) {
      Object.assign(response, {
        status: 401,
        mess: "Unauthorized",
      });
    }
  }

  res.status(response.status).json(response);
};
