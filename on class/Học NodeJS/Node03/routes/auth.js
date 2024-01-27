var express = require("express");
var passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");
/* GET users listing. */
router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  })
);
router.get("/logout", (req, res) => {
  req.logout((err) => {});
  res.redirect("/auth/login");
});

router.get("/google/callback", authController.login);
router.post(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  })
);

module.exports = router;
