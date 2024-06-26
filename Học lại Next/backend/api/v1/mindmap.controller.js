const jwt = require("jsonwebtoken");
const { User, Mindmap } = require("../../models/index");
const crypto = require("crypto");
module.exports = {
  getAll: async (req, res) => {
    const user_id = req.user.id;
    const response = {};
    try {
      const mindmaps = await Mindmap.findAll({
        where: { user_id },
        order: [["created_at", "desc"]],
      });
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: mindmaps,
      });
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  find: async (req, res) => {
    const { id } = req.params;
    const response = {};
    try {
      const mindmap = await Mindmap.findByPk(id);
      const { JWT_SECRET } = process.env;
      const token = req.get("Authorization")?.split(" ")[1];
      if (token) {
        const { userId } = jwt.verify(token, JWT_SECRET);
        if (userId == mindmap.user_id) {
          Object.assign(response, {
            status: 200,
            message: "Success",
            data: mindmap,
            edit: true,
          });
        } else {
          if (mindmap.private) {
            Object.assign(response, {
              status: 404,
              message: "Not Found",
            });
          } else {
            Object.assign(response, {
              status: 200,
              message: "Success",
              data: mindmap,
              edit: false,
            });
          }
        }
      } else {
        if (mindmap.private) {
          Object.assign(response, {
            status: 404,
            message: "Not Found",
          });
        } else {
          mindmap.edit = false;
          Object.assign(response, {
            status: 200,
            message: "Success",
            data: mindmap,
          });
        }
      }
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  create: async (req, res) => {
    const user_id = req.user.id;
    const body = req.body;
    const id = crypto.randomBytes(16).toString("hex");
    const response = {};
    try {
      const mindmap = await Mindmap.create({ ...body, user_id, id });
      Object.assign(response, {
        status: 201,
        message: "Success",
        data: mindmap,
      });
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const method = req.method;
    // const user_id = req.user.id;
    //body={ title, description, data, private }
    const body = req.body;
    console.log(body);
    const response = {};
    if (method === "PUT") {
      body = Object.assign(
        {
          title: null,
          description: null,
          data: null,
          private: true,
        },
        body
      );
    }
    try {
      await Mindmap.update(body, { where: { id } });
      const mindmap = await Mindmap.findByPk(id, {
        attributes: { exclude: "user_id" },
      });
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: mindmap,
      });
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const response = {};
    try {
      await Mindmap.destroy({
        where: { id },
      });
      Object.assign(response, {
        status: 204,
        message: "Resource Deleted Successfully",
      });
    } catch (error) {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    }
    res.status(response.status).json(response);
  },
};
