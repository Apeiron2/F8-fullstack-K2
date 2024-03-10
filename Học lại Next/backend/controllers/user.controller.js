const moment = require("moment");
const { User } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll({
      order: [["id", "asc"]],
    });
    res.render("users/index", { users, moment });
  },
  add: (req, res) => {
    res.render("users/add");
  },
};
