var express = require("express");
var router = express.Router();
var shortenController = require("../controllers/shorten.controller");
const { User, Shorten } = require("../models/index");
const moment = require("moment");
moment.locale("vi");
/* GET home page. */
router.get("/", async function (req, res, next) {
  const dnsShorten = process.env.DNS_SHORTEN;
  const { id, name } = req.user;
  const hash = req.flash("hash")[0];
  const old = req.flash("old")[0];
  const error = req.flash("error")[0];
  const success = req.flash("success")[0];
  const user = await User.findOne({
    where: { id },
    include: {
      model: Shorten,
      as: "shortens",
    },
    order: [[{ model: Shorten, as: "shortens" }, "created_at", "DESC"]],
  });

  const shortenList = Array.from(await user.shortens);
  shortenList.forEach((shorten) => {
    const url = new URL(shorten.original);
    shorten.hostname = url.hostname;
    shorten.time_ago = moment(shorten.created_at).fromNow();
    shorten.share = `https://www.facebook.com/sharer.php?u=${shorten.original}&hashtag=%23${name}`;
  });

  return res.render("index", {
    dnsShorten,
    error,
    success,
    shortenList,
    old,
    user: req.user,
    hash,
  });
});

router.post("/", shortenController.create);
router.post("/edit/:hash", shortenController.update);
router.get("/delete/:hash", shortenController.delete);

module.exports = router;
