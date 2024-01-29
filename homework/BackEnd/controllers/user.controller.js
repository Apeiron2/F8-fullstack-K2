const model = require("../models/index");
const { User, Role } = model;
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
    let limit = 100;
    let offset = (+page - 1) * limit;
    let { count, rows } = await User.findAndCountAll({
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
    // for (let i = 0; i < rows.length; i++) {
    //   const phone = await rows[i].getPhone();
    //   rows[i].phone = phone?.phone;
    // }
    res.render("users/index", {
      users: rows,
      totalPage,
      page,
      moment,
    });
  },
  add: async (req, res) => {
    const roles = await Role.findAll({
      order: [["name", "asc"]],
    });
    return res.render("users/add", { roles });
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = body.status == 1;
    const roles = Array.from(body.roles);
    const user = await User.create(body);
    if (user && roles.length) {
      for (let roleId of roles) {
        const role = await Role.findByPk(roleId);
        if (role) {
          await user.addRole(role);
        }
      }
    }
    return res.redirect("/users");
  },
  role: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.redirect("/users");
    let rolesAll = await Role.findAll();
    const rolesUser = await user.getRoles();
    res.render("users/role", { rolesAll, user, rolesUser });
  },
  handleRole: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.redirect("/users");
    const { roles } = req.body;
    try {
      await user.setRoles(Array.from(roles));
    } catch (error) {
      console.log(error);
    }
    res.redirect("/users/role/" + id);
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: { id },
        include: [{ model: model.Role, as: "roles" }],
      });
      if (!user) {
        throw next(new Error("User không tồn tại"));
      }
      const roles = await model.Role.findAll({
        order: [["name", "asc"]],
      });
      const role_user = await user.getRoles();
      res.render("users/edit", { user, roles, role_user });
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
    const courses = Array.from(body.courses);
    const courseList = await Promise.all(
      courses.map((courseId) => model.Course.findByPk(courseId))
    );
    const user = await User.findByPk(id);
    await user.setCourses(courseList);
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({ where: { id }, force: true });
    return res.redirect("/users");
  },
};
