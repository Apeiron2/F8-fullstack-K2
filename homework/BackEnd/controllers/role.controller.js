const model = require("../models/index");
const { Role, Permission } = model;
module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll({
      order: [["created_at", "desc"]],
    });
    const permissionsAll = await Permission.findAll();
    await Promise.all(
      roles.map(async (role) => {
        const permissionsRole = await role.getPermissions();
        role.permissions = Array.from(permissionsRole);
      })
    );
    res.render("roles/index", { roles, permissionsAll });
  },
  add: async (req, res) => {
    const status = req.flash("status")[0];
    const permissions = await Permission.findAll();
    res.render("roles/add", { permissions, status });
  },
  handleAdd: async (req, res) => {
    let { name, permissions } = req.body;
    const role = await Role.create({ name });
    if (!role) {
      req.flash("status", { status: false, mess: "Tạo Role thất bại!" });
      return res.redirect("/roles/add");
    }
    try {
      Array.from(permissions).forEach(async (permission) => {
        permission = await Permission.findByPk(permission);
        await role.addPermission(permission);
      });
      req.flash("status", { status: true, mess: "Tạo Role thành công!" });
      return res.redirect("/roles/add");
    } catch (error) {
      req.flash("status", { status: false, mess: "Tạo Role thất bại!" });
      res.redirect("/roles/add");
    }
  },
  edit: async (req, res) => {
    const status = req.flash("status")[0];
    const { id } = req.params;
    const role = await Role.findOne({
      where: { id },
    });
    const permissionsAll = await Permission.findAll();
    const permissionsRole = await role.getPermissions();
    res.render("roles/edit", { status, role, permissionsAll, permissionsRole });
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    let { name, permissions } = req.body;
    permissions = Array.from(permissions);
    const role = await Role.findByPk(id);
    if (!role) res.redirect("/roles");
    try {
      role.name = name;
      await role.save();
      await role.setPermissions(permissions);
      req.flash("status", { status: true, mess: "Chỉnh sửa thành công!" });
      res.redirect("/roles/edit/" + id);
    } catch (error) {
      req.flash("status", { status: false, mess: "Chỉnh sửa thất bại!" });
      res.redirect("/roles/edit/" + id);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await Role.destroy({ where: { id }, force: true });
    return res.redirect("/roles");
  },
};
