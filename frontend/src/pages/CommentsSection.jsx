import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import { Favorite, Reply, Send } from "@mui/icons-material";
import { motion } from "framer-motion";

const colors = {
  beige: "#F0E8C8",
  sandy: "#EFE6C9",
  ivory: "#F2EBD0",
  olive: "#829777",
  cream: "#F0E7CA",
  sage: "#7D9272",
  moss: "#869977",
  black: "#000000",
  white: "#FFFFFF",
};

const CommentSection = ({ post, handleComment }) => {
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null); // Stores index of comment being replied to
  const [likes, setLikes] = useState(Array(post.comments.length).fill(0));
  const [liked, setLiked] = useState(Array(post.comments.length).fill(false));


  // logic
  const handleLike = (index) => {
    const newLikes = [...likes];
    const newLiked = [...liked];
    if (newLiked[index]) {
      newLikes[index] -= 1;
    } else {
      newLikes[index] += 1;
    }
    newLiked[index] = !newLiked[index];
    setLikes(newLikes);
    setLiked(newLiked);
  };

  return (
    <Box mt={1} mb={1}>
      {/* Comment Input Box */}
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar
          src="/profile.jpg"
          alt="User Avatar"
          sx={{ bgcolor: colors.sage, width: 32, height: 32 }}
        />
        <TextField
          variant="standard"
          placeholder="Add a comment..."
          value={commentText}
          size="small"
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && commentText.trim() !== "") {
              handleComment(post.id, commentText);
              setCommentText("");
            }
          }}
          sx={{
            bgcolor: "#f5f5f5",
            borderRadius: "20px",
            minWidth: "400px",
            padding: "4px 10px",
            boxShadow: "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
            "&:hover": {
              boxShadow:
                "inset 2px 2px 6px #d1d1d1, inset -2px -2px 6px #ffffff",
            },
            "&:focus-within": {
              boxShadow:
                "inset 1px 1px 5px #b0b0b0, inset -1px -1px 5px #ffffff",
              bgcolor: "#ebebeb",
            },
            "& input": { padding: "8px", fontSize: "14px", color: "#444" },
            "& .MuiInput-underline:before, & .MuiInput-underline:after": {
              display: "none",
            },
          }}
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.olive,
              borderRadius: "20px",
              color: colors.sandy,
              ":hover": { bgcolor: colors.sage },
              fontSize: "14px",
              padding: "6px 12px",
              "&:focus": { outline: "none" },
              "&:active": { outline: "none" },
            }}
            disabled={!commentText.trim()}
            onClick={() => {
              handleComment(post.id, commentText);
              setCommentText("");
            }}
          >
            Comment
          </Button>
        </motion.div>
      </Box>

      {/* Comments List */}
      <Box mt={2}>
        {post.comments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Box display="flex" alignItems="flex-start" mt={2} gap={1}>
              <Avatar
                src="/profile.jpg"
                alt="User Avatar"
                sx={{ bgcolor: colors.sage, width: 32, height: 32 }}
              />
              <Box sx={{ paddingLeft: 1, width: "100%" }}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color={colors.black}
                  fontSize="14px"
                >
                  @{comment.user}{" "}
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    • 2h ago
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.black}
                  fontSize="14px"
                >
                  {comment.text}
                </Typography>

                {/* Like & Reply Section */}
                <Box display="flex" alignItems="center" gap={2} mt={0.5}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      size="small"
                      sx={{ color: liked[index] ? "red" : colors.olive, "&:focus": { outline: "none" }, "&:active": { outline: "none" } }}
                      onClick={() => handleLike(index)}
                    >
                      <Favorite fontSize="small" />
                    </IconButton>
                    <Typography variant="caption" sx={{ color: colors.black, marginLeft: "4px" }}>
                      {likes[index]}
                    </Typography>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      size="small"
                      startIcon={<Reply />}
                      sx={{
                        textTransform: "none",
                        color: colors.sage,
                        fontSize: "13px",
                        ":hover": { color: colors.olive, transform: "translateX(3px)" },
                        transition: "all 0.2s ease-in-out",
                        "&:focus": { outline: "none" }, "&:active": { outline: "none" },
                      }}
                      onClick={() => setReplyingTo(replyingTo === index ? null : index)}
                    >
                      Reply
                    </Button>
                  </motion.div>
                </Box>
                
                {/* Reply Input Box */}
                {replyingTo === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box display="flex" alignItems="center" mt={1} gap={1}>
                      <Avatar
                        src="/profile.jpg"
                        alt="User Avatar"
                        sx={{ bgcolor: colors.sage, width: 28, height: 28 }}
                      />
                      <TextField
                        variant="standard"
                        placeholder="Write a reply..."
                        value={replyText}
                        size="small"
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && replyText.trim() !== "") {
                            handleComment(
                              post.id,
                              `Replying to @${comment.user}: ${replyText}`
                            );
                            setReplyText("");
                            setReplyingTo(null);
                          }
                        }}
                        sx={{
                          bgcolor: "#f5f5f5",
                          borderRadius: "20px",
                          minWidth: "350px",
                          padding: "4px 10px",
                          boxShadow:
                            "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
                          "&:hover": {
                            boxShadow:
                              "inset 2px 2px 6px #d1d1d1, inset -2px -2px 6px #ffffff",
                          },
                          "&:focus-within": {
                            boxShadow:
                              "inset 1px 1px 5px #b0b0b0, inset -1px -1px 5px #ffffff",
                            bgcolor: "#ebebeb",
                          },
                          "& input": {
                            padding: "8px",
                            fontSize: "14px",
                            color: "#444",
                          },
                          "& .MuiInput-underline:before, & .MuiInput-underline:after":
                            { display: "none" },
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          sx={{ color: colors.olive }}
                          onClick={() => {
                            handleComment(
                              post.id,
                              `Replying to @${comment.user}: ${replyText}`
                            );
                            setReplyText("");
                            setReplyingTo(null);
                          }}
                          disabled={!replyText.trim()}
                        >
                          <Send fontSize="small" />
                        </IconButton>
                      </motion.div>
                    </Box>
                  </motion.div>
                )}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default CommentSection;
