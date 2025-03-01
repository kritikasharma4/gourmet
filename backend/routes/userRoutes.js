import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User routes working!");
});

export default router; // ✅ Ensure this is 'export default'
