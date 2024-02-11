var express = require("express");
var router = express.Router();
const userController = require("../controllers/api/v1/user.controller");
/* GET users listing. */
router.get("/users", userController.getAll);

module.exports = router;
