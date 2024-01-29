var express = require("express");
var router = express.Router();
const qrcode = require("qrcode");
const { User, Shorten } = require("../models/index");
router.get("/:hash", async (req, res) => {
  const { hash } = req.params;
  const shortenInstance = await Shorten.findOne({ where: { hash } });
  if (shortenInstance) {
    shortenInstance.clicked = shortenInstance.clicked + 1;
    shortenInstance.save();
    if (!shortenInstance.status) {
      return res.redirect(shortenInstance.original);
    }
    const qr = await qrcode.toBuffer(
      `${process.env.DNS_SHORTEN}${shortenInstance.hash}`
    );
    return res.render("shorten/index", {
      shorten: shortenInstance,
      qrcode: qr.toString("base64"),
    });
  }
  return res.render("error");
});
module.exports = router;
