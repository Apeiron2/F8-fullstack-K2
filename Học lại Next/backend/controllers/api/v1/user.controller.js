const { User } = require("../../../models/index");
module.exports = {
  getAll: async (req, res) => {
    const response = {};
    try {
      const users = await User.findAll();
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: users,
      });
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Internal Server Error",
      });
    }
    res.status(response.status).json(response);
  },
};
