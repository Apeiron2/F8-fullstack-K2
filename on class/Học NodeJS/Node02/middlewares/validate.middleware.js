const { object } = require("yup");
module.exports = async (req, res, next) => {
  // Sửa request
  const errors = req.flash("errors");
  const old = req.flash("old");
  req.errors = errors.length ? errors[0] : {};
  req.old = old.length ? old[0] : {};
  req.validate = async (data, rule = {}) => {
    const schema = object(rule);
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
      return body;
    } catch (error) {
      const errors = Object.fromEntries(
        error.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", data);
    }
  };
  next();
};
