const { Op } = require("sequelize");
const { User } = require("../../models/index");
const { object, string } = require("yup");
const bcrypt = require("bcryptjs");
module.exports = {
  index: async (req, res) => {
    const {
      order = "asc",
      sort = "id",
      status,
      q,
      limit,
      page = 1,
    } = req.query;
    const response = {};
    try {
      const filter = {};
      if (status === "true" || status === "false") filter.status = status;
      if (q) {
        filter[Op.or] = {
          name: {
            [Op.iLike]: `%${q.trim()}%`,
          },
          email: {
            [Op.iLike]: `%${q.trim()}%`,
          },
        };
      }
      const options = {
        order: [[sort, order]],
        attributes: { exclude: ["password"] },
        where: filter,
      };
      if (limit && Number.isInteger(+limit)) {
        const offset = (+page - 1) * limit;
        (options.offset = offset), (offset.limit = limit);
      }
      const { count, rows: users } = await User.findAndCountAll(options);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: users,
        count,
      });
    } catch (error) {
      Object.assign(response, { status: 500, message: "Server ngu" });
    }
    res.status(response.status).json(response);
  },
  find: async (req, res) => {
    const { id } = req.params;
    const response = {};
    try {
      const user = await User.findByPk(id, {
        attributes: { exclude: "password" },
      });
      if (!user) {
        throw new Error(404);
      }
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
    } catch (error) {
      Object.assign(response, {
        status: error.message == 404 ? 404 : 500,
        message: error.message == 404 ? "Not Found" : "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  store: async (req, res) => {
    const response = {};
    //Validate
    const schema = object({
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng"),
      password: string()
        .required("Mật khẩu bắt buộc phải nhập")
        .min(6, "Mật khẩu ít nhất 6 ký tự"),
      status: string().test(
        "check-boolean",
        "Trạng thái không hợp",
        (value) => {
          return value === "true" || value === "false";
        }
      ),
    });
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
      body.password = bcrypt.hashSync(body.password, 10);
      const user = await User.create(body);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
      delete user.dataValues.password;
    } catch (e) {
      console.log(e);
      const errors = Object.fromEntries(
        e.inner.map((item) => [item.path, item.message])
      );
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
        errors,
      });
    }
    res.status(response.status).json(response);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const method = req.method;
    // Validate: Có dữ liệu được gửi lên thì validate dữ liệu đó
    const response = {};
    //Validate
    let rules = {};
    if (req.body.name) {
      rules.name = string().required("Tên bắt buộc phải nhập");
    }
    if (req.body.email) {
      rules.email = string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng");
    }
    if (req.body.password) {
      rules.password = string()
        .required("Mật khẩu bắt buộc phải nhập")
        .min(6, "Mật khẩu ít nhất 6 ký tự");
    }
    if (req.body.status) {
      rules.status = string().test(
        "check-boolean",
        "Trạng thái không hợp",
        (value) => {
          return value === "true" || value === "false";
        }
      );
    }
    const schema = object(rules);
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
      if (body.password) {
        body.password = bcrypt.hashSync(body.password, 10);
      }
      if (method === "PUT") {
        body = Object.assign(
          {
            name: null,
            email: null,
            password: null,
            status: null,
          },
          body
        );
      }
      await User.update(body, { where: { id } });
      const user = await User.findByPk(id, {
        attributes: { exclude: "password" },
      });
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
      delete user.dataValues.password;
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => [item.path, item.message])
      );
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
        errors,
      });
    }
    res.status(response.status).json(response);
  },
  delete: async (req, res) => {},
};
