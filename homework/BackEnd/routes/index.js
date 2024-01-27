var express = require("express");
const homeController = require("../controllers/home.controller");
var router = express.Router();

/* GET home page. */
router.get("/", homeController.index);

module.exports = router;
