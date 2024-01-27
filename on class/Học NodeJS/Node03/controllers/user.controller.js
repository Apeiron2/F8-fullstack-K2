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
    let { count, rows } = await User.findAndCountAll({
      order: [["created_at", "asc"]],
      where: filter,
      limit: limit,
      offset: offset,
      include: {
        model: model.Phone,
        as: "phone",
      },
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
    const courses = await model.Course.findAll({
      order: [["name", "asc"]],
    });
    return res.render("users/add", { courses });
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = +body.status === 1;
    const courses = Array.from(body.courses);
    const user = await User.create(body);
    if (user && courses.length) {
      for (let courseId of courses) {
        const course = await model.Course.findByPk(courseId);
        if (course) {
          await user.addCourse(course);
        }
      }
    }
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      // const user = await User.findByPk(id); --> Cách 1 tìm kiếm theo Khóa chính
      const user = await User.findOne({
        where: { id },
        include: [{ model: model.Post, as: "posts" }, { model: model.Course }],
      });
      console.log(user?.Courses);
      if (!user) {
        throw next(new Error("User không tồn tại"));
      }
      const courses = await model.Course.findAll({
        order: [["name", "asc"]],
      });
      res.render("users/edit", { user, courses });
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
