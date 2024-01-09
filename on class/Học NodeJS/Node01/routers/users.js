import express from "express";
import orderRouter from "./usersOrder.js";
import userController from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", userController.index);
router.get("/add", userController.add);
router.get("/active/:id", userController.active);
router.use("/order", orderRouter);
export default router;
