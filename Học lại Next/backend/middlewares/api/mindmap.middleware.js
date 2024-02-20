const { Mindmap } = require("../../models/index");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const user_id = req?.user?.id;
  const method = req.method;
  const response = {};
  try {
    const mindmap = await Mindmap.findByPk(id);
    if (!mindmap) {
      throw new Error(404);
    }
    if (method === "GET" && mindmap.user_id !== user_id) {
      if (mindmap.private) {
        throw new Error(403);
      } else {
        req.mindmap = mindmap;
        return next();
      }
    }
    if (mindmap.user_id !== user_id) {
      throw new Error(403);
    }
    req.mindmap = mindmap;
    return next();
  } catch (error) {
    const status = +error.message;
    const resHTTP = {
      403: "Forbidden",
      404: "Not Found",
      500: "Server Error",
    };
    Object.assign(response, {
      status: resHTTP[status] ? status : 500,
      message: resHTTP[status] ? resHTTP[status] : resHTTP[500],
    });
  }

  res.status(response.status).json(response);
};
