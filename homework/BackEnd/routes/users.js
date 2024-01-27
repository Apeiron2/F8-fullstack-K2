var express = require("express");
const userController = require("../controllers/user.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.index);
router.get("/add", userController.add);
router.post("/add", userController.handleAdd);
router.get("/edit/:id", userController.edit);
router.post("/edit/:id", userController.handleEdit);
router.post("/delete/:id", userController.delete);
router.get("/role/:id", userController.role);
router.post("/role/:id", userController.handleRole);
module.exports = router;
