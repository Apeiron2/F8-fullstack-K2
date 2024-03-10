var express = require("express");
const userController = require("../controllers/user.controller");
const mindmapController = require("../controllers/mindmap.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.index);
router.get("/add", userController.add);
router.get("/:id/mindmaps", mindmapController.index);
module.exports = router;
