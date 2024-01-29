var express = require("express");
const userController = require("../controllers/user.controller");
var router = express.Router();
const permission = require("../middlewares/permission.middleware");
/* GET users listing. */
router.get("/", permission("users.read"), userController.index);
router.get("/add", permission("users.add"), userController.add);
router.post("/add", permission("users.add"), userController.handleAdd);
router.get("/edit/:id", permission("users.edit"), userController.edit);
router.post("/edit/:id", permission("users.edit"), userController.handleEdit);
router.post("/delete/:id", permission("users.delete"), userController.delete);
router.get("/role/:id", permission("users.edit"), userController.role);
router.post("/role/:id", permission("users.edit"), userController.handleRole);
module.exports = router;
