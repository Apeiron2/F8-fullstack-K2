module.exports = (req, res, next) => {
  const pathname = req.baseUrrl + req.path;
  if (req.user && pathname != "/auth/logout") {
    return res.redirect("/");
  }
  return next();
};
