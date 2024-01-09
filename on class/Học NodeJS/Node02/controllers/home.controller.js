const moment = require("moment");
const { string } = require("yup");
const coursesModel = require("../models/courses.model");
module.exports = {
  index: async (req, res) => {
    let courses;
    const { keyword, status } = req.query;
    try {
      courses = await coursesModel.all(keyword, status);
    } catch (error) {
      //   throw new Error(error.message);
    }
    res.render("home/index", {
      courses,
      moment,
      msg: req.flash("msg"),
    });
  },
  add: (req, res) => {
    res.render("home/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên khóa học phải có")
        .test("check-courseUnique", "Khóa học đã tồn tại", async (value) => {
          return await coursesModel.courseUnique(value);
        }),
      price: string()
        .required("Giá khóa học bắt buộc phải nhập")
        .test(
          "check-number",
          "Giá khóa học phải là số",
          (value) => !isNaN(+value)
        ),
    });
    if (body) {
      await coursesModel.create(body);
      req.flash("msg", "Thêm khóa học thành công");
      return res.redirect("/");
    }
    return res.redirect("/add");
  },
  delete: (req, res) => {
    res.render();
  },
  edit: async (req, res) => {
    const { id } = req.params;
    // req.session.currentID = id;
    let course;
    try {
      course = await coursesModel.get(id);
      if (!course.length) {
        throw new Error("Khóa học không tồn tại");
      }
    } catch (error) {
      return next(error);
    }
    req.old = course[0];
    req.old.status = req.old.status === true ? "active" : "inactive";
    res.render("home/edit", { req });
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;
    // if (+req.session.currentID !== id) {
    //   next(new Error("Cút"));
    // }
    let body = await req.validate(req.body, {
      name: string()
        .required("Tên khóa học phải có")
        .test("check-courseUnique", "Khóa học đã tồn tại", async (value) => {
          return await coursesModel.courseUnique(value, id);
        }),
      price: string()
        .required("Giá khóa học bắt buộc phải nhập")
        .test(
          "check-number",
          "Giá khóa học phải là số",
          (value) => !isNaN(+value)
        ),
    });
    if (body) {
      body.status = body.status === "active";
      await coursesModel.update(body, id);
      req.flash("msg", "Đã update khóa học " + id);
      return res.redirect("/");
    }
    res.redirect("/edit");
  },
  handleDelete: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      await coursesModel.delete(id);
      req.flash("msg", "Xóa thành công!");
      return res.redirect("/");
    } catch (e) {
      return next(e);
    }
  },
};
