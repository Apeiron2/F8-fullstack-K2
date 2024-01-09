import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>User Order</h1>");
});
router.get("/complete", (req, res) => {
  res.send("<h1>User Order Complete</h1>");
});
router.get("/delete", (req, res) => {
  res.send("<h1>User Order Delete</h1>");
});
router.get("/cancer", (req, res) => {
  res.send("<h1>User Order Cancer</h1>");
});

export default router;
