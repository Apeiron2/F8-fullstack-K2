const { Op } = require("sequelize");
const { User } = require("../../../models/index");
module.exports = {
  index: async (req, res) => {
    const response = {};
    try {
      const {
        status,
        q,
        order = "asc",
        sort = "id",
        limit,
        page = 1,
      } = req.query;
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
        attributes: {
          exclude: ["password", "provider", "refresh_token"],
        },
        order: [[sort, order]],
        where: filter,
      };

      if (Number.isInteger(+page)) {
        options.offset = (page - 1) * limit;
        if (Number.isInteger(+limit)) {
          options.limit = +limit;
        }
      }

      const { count, rows: users } = await User.findAndCountAll(options);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: users,
        count,
      });
    } catch (e) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  find: async (req, res) => {},
  store: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
