const model = require("../models/index");
const User = model.User;
const moment = require("moment");
const { Op } = require("sequelize");
module.exports = {
  index: async function (req, res, next) {
    let { status, keyword, page = 1 } = req.query;
    if (!+page) page = 1;
    const filter = {};
    if ((status == "active") | (status == "inactive")) {
      filter.status = status === "active";
    }
    if (keyword) {
      filter[Op.or] = [
        {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        {
          name: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ];
    }
    let limit = 3;
    let offset = (+page - 1) * limit;
    const { count, rows } = await User.findAndCountAll({
      order: [["created_at", "asc"]],
      where: filter,
      limit: limit,
      offset: offset,
    });
    const totalPage = Math.ceil(count / limit);
    /**
     * Phân trang: lấy query xem page bằng bao nhiêu
     * Xác định Limit
     * Tính offset=(page-1)*limit
     * Tính tổng số bản ghi
     * Tính tổng số trang: tổng số bản ghi / limit
     * Hiển thị số trang: paginate của boostrap
     */
    res.render("users/index", { users: rows, totalPage, page, moment });
  },
  add: (req, res) => {
    return res.render("users/add");
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = +body.status === 1;
    const result = await User.create(body);
    console.log(result);
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      // const user = await User.findByPk(id); --> Cách 1 tìm kiếm theo Khóa chính
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw next(new Error("User không tồn tại"));
      }
      res.render("users/edit", { user });
    } catch (error) {
      return next(error);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    body.status = body.status == 1;
    const status = await User.update(body, {
      where: { id },
    });
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({ where: { id }, force: true });
    return res.redirect("/users");
  },
};
