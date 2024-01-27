module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    return res.render("auth/login", { error });
  },
};
