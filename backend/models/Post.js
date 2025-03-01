const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  hashtags: [String],
  tags: [String],
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
