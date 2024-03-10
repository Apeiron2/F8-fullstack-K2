var express = require("express");
const queue = require("../core/queue");
const sendEmailSubscribe = require("../jobs/sendEmailSubscribe");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/send-mail", async (req, res) => {
  const response = {
    status: 200,
    message: "Success",
  };
  const emails = [
    "apeiron922003@gmail.com",
    "meorung922003@gmail.com",
    "apeironisme@gmail.com",
    "Tai.VD212337@sis.hust.edu.vn",
  ];
  const email = req.query?.email;
  if (email) {
    await queue.addJob("sendEmailSubscribe", email);
  } else {
    await queue.addJob("sendEmailSubscribe", emails);
  }
  res.status(response.status).json(response);
});
module.exports = router;
