import React, { useState } from "react";
import { Box, Card, CardHeader, CardMedia, CardContent, IconButton, Typography, Avatar, TextField, Button, Grid } from "@mui/material";
import { Favorite, FavoriteBorder, ChatBubbleOutline, Share, Send } from "@mui/icons-material";
import Sidebar from "./Sidebar"; // Assuming your Sidebar component is in the same folder

const Feeds = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "foodie_lover",
      avatar: "https://i.pravatar.cc/50?img=10",
      image: "https://source.unsplash.com/400x300/?food,pizza",
      caption: "Best pizza in town! 🍕 #Foodie #Gourmet",
      likes: 120,
      comments: [{ user: "tasty_tom", text: "Looks amazing! 🤤" }],
      isLiked: false,
      timestamp: "2h ago",
    },
    {
      id: 2,
      username: "healthy_bites",
      avatar: "https://i.pravatar.cc/50?img=15",
      image: "https://source.unsplash.com/400x300/?salad,healthy",
      caption: "Fresh and delicious! 🥗 #HealthyEating #Gourmet",
      likes: 95,
      comments: [{ user: "vegan_queen", text: "I need this recipe! 🍃" }],
      isLiked: false,
      timestamp: "3h ago",
    },
  ]);

  const [commentInputs, setCommentInputs] = useState({});

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const addComment = (postId) => {
    if (!commentInputs[postId]?.trim()) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { user: "You", text: commentInputs[postId] }] }
          : post
      )
    );
    setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <Grid container sx={{ height: "100vh", bgcolor: "#f4f4f4", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Feeds Section */}
      <Grid item xs={6} sx={{ overflowY: "auto", p: 2 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardHeader avatar={<Avatar src={post.avatar} />} title={post.username} subheader={post.timestamp} />
            <CardMedia component="img" image={post.image} alt="Post image" sx={{ height: 300, objectFit: "cover" }} />
            <CardContent>
              <Typography variant="body1">{post.caption}</Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <IconButton onClick={() => toggleLike(post.id)}>
                  {post.isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
                <Typography variant="body2">{post.likes}</Typography>
                <IconButton>
                  <ChatBubbleOutline />
                </IconButton>
                <Typography variant="body2">{post.comments.length}</Typography>
                <IconButton>
                  <Share />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {/* Comments Section */}
      <Grid item xs={3.5} sx={{ p: 2, overflowY: "auto", bgcolor: "white", borderLeft: "1px solid #ddd" }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Comments</Typography>
        {posts.map((post) => (
          <Box key={post.id} sx={{ mb: 3, p: 2, borderRadius: 2, bgcolor: "#f9f9f9", boxShadow: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold" color="primary">{post.username}'s Post</Typography>
            <Box sx={{ maxHeight: 150, overflowY: "auto", mt: 1 }}>
              {post.comments.map((comment, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  <Typography variant="body2"><strong>{comment.user}</strong>: {comment.text}</Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Write a comment..."
                variant="outlined"
                value={commentInputs[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
              <IconButton onClick={() => addComment(post.id)} color="primary">
                <Send />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Feeds;
