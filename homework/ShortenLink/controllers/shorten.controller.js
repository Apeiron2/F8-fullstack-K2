const { User, Shorten } = require("../models/index");
const bcryptjs = require("bcryptjs");
module.exports = {
  index: (req, res) => {},
  create: async (req, res) => {
    const { id } = req.user;
    const { original, password, custom, customID, safeRedirect } = req.body;
    req.flash("old", req.body);
    let hash;
    if (custom == "on") {
      hash = customID;
    } else {
      hash = bcryptjs.hashSync(original).slice(8, 18);
    }
    const status = safeRedirect == "on" ? true : false;
    const data = { user_id: id, hash, original, password, status };
    if (!original) {
      req.flash("error", "Liên kết không được để trống!");
      return res.redirect("/");
    }
    const isExist = await Shorten.findOne({ where: { hash } });
    if (isExist) {
      req.flash("error", "ID đã tồn tại! Hãy thử lại");
      return res.redirect("/");
    }
    if (hash.length >= 20) {
      req.flash("error", "ID quá dài");
      return res.redirect("/");
    }
    try {
      await Shorten.create(data);
      req.flash("hash", hash);
      req.flash("success", "Rút gọn link thành công!");
    } catch (error) {
      req.flash("error", "Đã có lỗi xảy ra");
    }
    return res.redirect("/");
  },
  read: (req, res) => {},
  update: async (req, res) => {
    const { hash } = req.params;
    const { password } = req.body;
    try {
      await Shorten.update({ password }, { where: { hash } });
      req.flash("success", "Update thành công!");
      return res.redirect("/");
    } catch (error) {
      req.flash("error", "Có lỗi xảy ra! Update thất bại!");
      return res.redirect("/");
    }
  },
  delete: async (req, res) => {
    const { hash } = req.params;
    const shorten = await Shorten.findOne({ where: { hash } });
    if (!shorten) {
      return res.render("error");
    }
    await shorten.destroy();
    return res.redirect("/");
  },
};
