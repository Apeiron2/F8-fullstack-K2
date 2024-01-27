var express = require("express");
const sendMail = require("../utils/mail");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req);
  res.render("index", { title: "Express" });
});
// router.get("/send-mail", async (req, res) => {
//   const info = await sendMail(
//     "meorung922003@gmail.com",
//     "SMTP Test",
//     "Xin chào người anh em"
//   );
//   res.json(info);
// });
module.exports = router;
