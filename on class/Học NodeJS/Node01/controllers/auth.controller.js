import { getError } from "../utils/validate.js";
import { object, string } from "yup";
const authController = {
  login: (req, res) => {
    const error = req.flash("error");
    res.render("auth/login", {
      layout: "auth/layout",
      error,
      getError,
    });
  },
  handleLogin: async (req, res) => {
    const { email, password } = req.body;
    const schema = object({
      email: string().required("Nhập đi").email("Email không đúng định dạng!"),
      password: string().min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    });
    try {
      const data = await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      let errors = error.inner.map(({ path, message }) => [path, message]);
      errors = Object.fromEntries(errors);
      req.flash("error", errors);
    }

    return res.redirect("/login");
  },
};
export default authController;
