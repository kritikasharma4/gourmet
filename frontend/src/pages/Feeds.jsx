import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Favorite, ChatBubbleOutline } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, IconButton, TextField, Box } from "@mui/material";

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
    comments: [
      { user: "baker_queen", text: "This looks divine!" },
    ],
  },
  {
    id: 3,
    user: "jasmine",
    image: "/food3.jpeg",
    caption: "Chocolate cake heaven 🍫🍰",
    hashtags: "#dessert #chocolate #sweet",
    likes: 90,
    comments: [
      { user: "og_queen", text: "This looks tasty!" },
      { user: "og_queen", text: "This looks tasty!" },
      { user: "og_queen", text: "This looks tasty!" },
      { user: "og_queen", text: "This looks tasty!" },
    ],
  },
];

const Feeds = () => {
  const [postList, setPostList] = useState(posts);

  const handleLike = (id) => {
    setPostList(
      postList.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, comment) => {
    setPostList(
      postList.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, { user: "you", text: comment }] }
          : post
      )
    );
  };

  return (
    <Box display="flex" bgcolor="#f4f4f4" minHeight="100vh" minWidth="98vw">
      <Sidebar />
      <Box flex={1} p={4}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Feeds
        </Typography>
        <Box display="flex" flexDirection="column" gap={4}>
          {postList.map((post) => (
            <Card key={post.id} sx={{ display: "flex", boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: "60%", height: 250, objectFit: "cover" }}
                image={post.image}
                alt="Food post"
              />
              <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    @{post.user}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {post.caption}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {post.hashtags}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={2} gap={2}>
                  <IconButton color="error" onClick={() => handleLike(post.id)}>
                    <Favorite />
                  </IconButton>
                  <Typography>{post.likes}</Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Comments
                  </Typography>
                  <Box sx={{ maxHeight: 100, overflowY: "auto", bgcolor: "#f0f0f0", p: 1, borderRadius: 1 }}>
                    {post.comments.map((comment, index) => (
                      <Typography key={index} variant="body2">
                        <strong>@{comment.user}</strong>: {comment.text}
                      </Typography>
                    ))}
                  </Box>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Add a comment..."
                    sx={{ mt: 1 }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        handleComment(post.id, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Feeds;
