import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { EmojiEvents, MonetizationOn, TrendingUp } from "@mui/icons-material";

const Leaderboard = () => {
  const stats = [
    { icon: <EmojiEvents fontSize="large" />, title: "Post Streaks", value: "12 Days", description: "Daily posting habit" },
    { icon: <MonetizationOn fontSize="large" />, title: "Coins Earned", value: "3500 Coins", description: "Earned from activities" },
    { icon: <TrendingUp fontSize="large" />, title: "Foodie Level", value: "Level 5", description: "Based on engagement" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#6C6A64",
        maxHeight: "100vh",
        padding: "10px",
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Track Foodie Stats
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#3A3A3A",
              color: "white",
              width: "80%",
              maxWidth: "400px",
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderRadius: "12px",
            }}
          >
            <Box sx={{ marginRight: "15px", color: "#FFD700" }}>{stat.icon}</Box>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {stat.title}
              </Typography>
              <Typography variant="body1">{stat.value}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {stat.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Leaderboard;
