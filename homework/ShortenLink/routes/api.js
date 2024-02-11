var express = require("express");
var router = express.Router();
const userController = require("../api/v1/users.controller");
const authController = require("../api/v1/auth.controller");
const authMiddleware = require("../middlewares/api/auth.middleware");
router.get("/v1/users", userController.index);
router.get("/v1/users/:id", userController.find);
router.post("/v1/users", userController.store);
router.put("/v1/users/:id", userController.update);
router.patch("/v1/users/:id", userController.update);
router.delete("/v1/users/:id", userController.delete);

// Authencation
router.post("/v1/auth/login", authController.login);
router.get("/v1/auth/profile", authMiddleware, authController.profile);
router.post("/v1/auth/logout", authMiddleware, authController.logout);
router.post("/v1/auth/refresh", authMiddleware, authController.refresh);

module.exports = router;
