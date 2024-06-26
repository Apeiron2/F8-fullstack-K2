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
router.get("/register", authController.register);
router.post("/register", authController.handleRegister);
router.get("/logout", (req, res) => {
  req.logout((err) => {});
  return res.redirect("/auth/login");
});
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", { scope: "email" })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);
module.exports = router;
