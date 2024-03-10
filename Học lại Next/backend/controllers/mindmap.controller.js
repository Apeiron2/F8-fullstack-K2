const moment = require("moment");
const { Mindmap } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const userId = req.params.id;
    const mindmaps = await Mindmap.findAll({
      where: {
        user_id: userId,
      },
      order: [["created_at", "desc"]],
    });
    res.render("users/mindmaps/index", { userId, mindmaps, moment });
  },
};
