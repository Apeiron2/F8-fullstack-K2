var express = require("express");
const roleController = require("../controllers/role.controller");
var router = express.Router();

/* GET roles listing. */
router.get("/", roleController.index);
router.get("/add", roleController.add);
router.post("/add", roleController.handleAdd);
router.get("/edit/:id", roleController.edit);
router.post("/edit/:id", roleController.handleEdit);
router.post("/delete/:id", roleController.delete);

module.exports = router;
