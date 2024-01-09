const isLogin = false;
const authMiddleware = (req, res, next) => {
  if (!isLogin) {
    return res.redirect("/login");
  }
  next();
};
export default authMiddleware;
