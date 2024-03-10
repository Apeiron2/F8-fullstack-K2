var express = require("express");
var router = express.Router();
// const userController = require("../api/v1/users.controller");
const userController = require("../controllers/api/v1/user.controller");
const authController = require("../api/v1/auth.controller");
const mindmapController = require("../api/v1/mindmap.controller");

// Middleware
const authMiddleware = require("../middlewares/api/auth.middleware");
const mindmapMiddleware = require("../middlewares/api/mindmap.middleware");
router.get("/v1/users", userController.index);
router.get("/v1/users/:id", userController.find);
router.post("/v1/users", userController.store);
router.put("/v1/users/:id", userController.update);
router.patch("/v1/users/:id", userController.update);
router.delete("/v1/users/:id", userController.delete);

// Mindmap
router.get("/v1/mindmaps", authMiddleware, mindmapController.getAll);
router.get("/v1/mindmaps/:id", mindmapController.find);
router.post("/v1/mindmaps", authMiddleware, mindmapController.create);
router.patch(
  "/v1/mindmaps/:id",
  authMiddleware,
  mindmapMiddleware,
  mindmapController.update
);
router.put(
  "/v1/mindmaps/:id",
  authMiddleware,
  mindmapMiddleware,
  mindmapController.update
);
router.delete(
  "/v1/mindmaps/:id",
  authMiddleware,
  mindmapMiddleware,
  mindmapController.delete
);

// Authencation
router.post("/v1/auth/login", authController.login);
router.get("/v1/auth/profile", authMiddleware, authController.profile);
router.post("/v1/auth/logout", authMiddleware, authController.logout);
router.post("/v1/auth/refresh", authController.refresh);

module.exports = router;
