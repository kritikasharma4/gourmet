import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Divider } from "@mui/material";
import { People, EmojiEvents } from "@mui/icons-material";

const friends = [
  { name: "Alex", rank: 1, streak: "20 Days", coins: 5000, level: "Level 7", avatar: "https://i.pravatar.cc/50?img=1" },
  { name: "Jordan", rank: 2, streak: "18 Days", coins: 4300, level: "Level 6", avatar: "https://i.pravatar.cc/50?img=2" },
  { name: "Taylor", rank: 3, streak: "15 Days", coins: 3900, level: "Level 5", avatar: "https://i.pravatar.cc/50?img=3" },
  { name: "Morgan", rank: 4, streak: "12 Days", coins: 3500, level: "Level 5", avatar: "https://i.pravatar.cc/50?img=4" },
  { name: "Jamie", rank: 5, streak: "10 Days", coins: 3100, level: "Level 4", avatar: "https://i.pravatar.cc/50?img=5" },
];

const FriendsLeaderboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        maxHeight: "100vh",
        width: "800px", // Increased width
        padding: "10px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        scrollbarWidth: "none", // Hides scrollbar in Firefox
        "&::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in Chrome/Safari
      }}
    >
      {/* Header */}
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1rem" }}>
        Friends Leaderboard
      </Typography>

      {/* Friends List */}
      <Box sx={{ textAlign: "center", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <People fontSize="small" />
        <Typography variant="body2">Your Foodie Friends</Typography>
      </Box>

      {/* Rank List */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
        }}
      >
        {friends.map((friend, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: friend.rank === 1 ? "#FFD700" : "#3A3A3A",
              color: friend.rank === 1 ? "black" : "white",
              width: "100%",
              maxWidth: "700px",
              display: "flex",
              alignItems: "center",
              padding: "8px",
              borderRadius: "12px",
            }}
          >
            <Avatar src={friend.avatar} sx={{ width: 40, height: 40, marginRight: "10px" }} />
            <CardContent sx={{ flexGrow: 1, padding: "5px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {friend.name}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>Streak: {friend.streak}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>Coins: {friend.coins}</Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>Level: {friend.level}</Typography>
            </CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              #{friend.rank}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Divider and Icon */}
      <Divider sx={{ backgroundColor: "white", margin: "10px 0" }} />
      <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <EmojiEvents fontSize="small" />
        <Typography variant="body2">Compare and Improve!</Typography>
      </Box>
    </Box>
  );
};

export default FriendsLeaderboard;
