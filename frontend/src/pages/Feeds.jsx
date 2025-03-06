import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Favorite, Search } from "@mui/icons-material";
import { ChatBubbleOutline, Share, Bookmark } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import CommentSection from "./CommentsSection";

const colors = {
  bg: "#F2EBD0",
  card: "#EFE6C9",
  textPrimary: "#7D9272",
  textSecondary: "#869977",
  button: "#829777",
  border: "#EFE8C8",
};

const posts = [
  {
    id: 1,
    user: "foodie_123",
    image: "/food1.jpeg",
    caption: "Delicious homemade pasta! 🍝✨",
    hashtags: "#homemade #pasta #delicious",
    likes: 34,
    comments: [
      { user: "gourmet_lover", text: "Looks so tasty! 😍" },
      { user: "chef_john", text: "Recipe please? 🤤" },
    ],
  },
  {
    id: 2,
    user: "sweettooth",
    image: "/food2.jpg",
    caption: "Chocolate cake heaven 🍫🍰",
    hashtags: "#dessert #chocolate #sweet",
    likes: 58,
    comments: [{ user: "baker_queen", text: "This looks divine!" }],
  },
];

const Feeds = () => {
  const [postList, setPostList] = useState(posts);
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  const handleLike = (id) => {
    setLikedPosts((prev) => {
      const isLiked = !prev[id]; // Toggle like state

      setPostList((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id
            ? { ...post, likes: isLiked ? post.likes + 1 : post.likes - 1 }
            : post
        )
      );

      return { ...prev, [id]: isLiked }; // Update likedPosts state
    });
  };

  const handleSave = (id) => {
    setSavedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleComment = (id, comment) => {
    setPostList(
      postList.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, { user: "you", text: comment }],
            }
          : post
      )
    );
  };

  return (
    <Box display="flex" bgcolor={colors.bg} minHeight="100vh" minWidth="100vw">
      <Box
        sx={{
          position: "fixed",
          height: "100vh",
          boxShadow: 2,
        }}
      >
        <Sidebar />
      </Box>
      <Box flex={1} p={4} ml={6}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Nico Moji, sans-serif",
              fontWeight: "bold",
              color: colors.textPrimary,
            }}
          >
            Gourmet
          </Typography>

          <TextField
            variant="standard"
            placeholder="Search posts..."
            size="small"
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: "20px",
              minWidth: "500px",
              padding: "8px 16px",
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
              "& input": { padding: "8px", fontSize: "14px", color: "#444" },
              "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                display: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#444" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box display="flex" flexDirection="column" gap={4}>
          {postList.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                sx={{
                  display: "flex",
                  boxShadow: 4,
                  borderRadius: 3,
                  bgcolor: colors.card,
                  height: "500px",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "50%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px 0 0 12px",
                  }}
                  image={post.image}
                  alt="Food post"
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    margin: 2,
                    marginBottom: 0,
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" color="#000">
                    {post.user}
                  </Typography>
                  <Typography variant="body2" color="#484848" sx={{ mb: 1 }}>
                    {post.caption}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#909090"
                    sx={{ fontStyle: "italic", opacity: 0.8 }}
                  >
                    {post.hashtags}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2} gap={2}>
                    <IconButton
                      sx={{
                        "&:focus": { outline: "none" },
                        "&:active": { outline: "none" },
                        color: likedPosts[post.id] ? "red" : "#BEC1A2",
                      }}
                      onClick={() => handleLike(post.id)}
                    >
                      <Favorite />
                    </IconButton>
                    <Typography ml={-2}>{post.likes}</Typography>

                    <IconButton
                      sx={{
                        color: "#829777",
                        "&:focus": { outline: "none" },
                        "&:active": { outline: "none" },
                      }}
                    >
                      <Share />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: savedPosts[post.id] ? "#69977" : "#BEC1A2",
                        "&:focus": { outline: "none" },
                        "&:active": { outline: "none" },
                      }}
                      onClick={() => handleSave(post.id)}
                    >
                      <Bookmark />
                    </IconButton>
                  </Box>

                  <Typography
                    variant="h7"
                    fontWeight="normal"
                    color={colors.black}
                    pt={2}
                  >
                    Comments ({post.comments.length})
                  </Typography>

                  <Box
                    mt={0}
                    p={0}
                    sx={{
                      flexGrow: 1,
                      overflowY: "auto",
                      maxHeight: "350px",
                      "&::-webkit-scrollbar": { display: "none" },
                      scrollbarWidth: "none",
                    }}
                  >
                    <CommentSection
                      post={post}
                      handleComment={handleComment}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Feeds;
