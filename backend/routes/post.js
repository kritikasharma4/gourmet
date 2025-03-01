const express = require("express");
const multer = require("multer");
const Post = require("../models/Post");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { caption, hashtags, tags } = req.body;
    const imageUrl = `data:image/png;base64,${req.file.buffer.toString("base64")}`;

    const newPost = new Post({
      caption,
      hashtags: hashtags.split(","),
      tags: tags.split(","),
      imageUrl,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully!", post: newPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
