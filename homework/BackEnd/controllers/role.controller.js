const { ro } = require("@faker-js/faker");
const model = require("../models/index");
const { Role, Permission } = model;
module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll({
      order: [["created_at", "desc"]],
    });
    res.render("roles/index", { roles });
  },
  add: async (req, res) => {
    const status = req.flash("status")[0];
    const permissions = await Permission.findAll();
    res.render("roles/add", { permissions, status });
  },
  handleAdd: async (req, res) => {
    let { name, permissions } = req.body;
    permissions = Array.from(permissions);
    const role = await Role.create({ name });
    if (!role) {
      req.flash("status", { status: false, mess: "Tạo Role thất bại!" });
      return res.redirect("/roles/add");
    }
    try {
      const permissionsInstance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { value: permission },
            default: { value: permission },
          });
          return permissionInstance;
        })
      );
      await role.addPermissions(permissionsInstance);
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
      include: {
        model: Permission,
        as: "permissions",
      },
    });
    if (!role) throw Error("Role không tồn tại!");
    const permissionsAll = await Permission.findAll();
    const permissionsRole = await role.permissions;
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
      const permissionsInstance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { value: permission },
            default: { value: permission },
          });
          return permissionInstance;
        })
      );
      await role.setPermissions(permissionsInstance);
      req.flash("status", { status: true, mess: "Chỉnh sửa thành công!" });
      res.redirect("/roles/edit/" + id);
    } catch (error) {
      req.flash("status", { status: false, mess: "Chỉnh sửa thất bại!" });
      res.redirect("/roles/edit/" + id);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const role = await Role.findOne({
      where: { id },
      include: {
        model: Permission,
        as: "permissions",
      },
    });
    if (role) {
      await role.removePermissions(role.permission);
      await role.destroy();
    }
    return res.redirect("/roles");
  },
};
