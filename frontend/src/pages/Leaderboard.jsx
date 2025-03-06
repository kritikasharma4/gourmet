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
        background: "linear-gradient(135deg, #3E2723, #5D4037)", // Dark outer gradient for contrast
        width: "100%",
        maxWidth: "380px",
        padding: "30px",
        borderRadius: "16px",
        color: "#EDE0D4",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", color: "#D7B19D" }}>
        Track Foodie Stats
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", marginTop: "12px" }}>
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              background: "linear-gradient(to right, #4E342E, #6D4C41)", // Slightly dark outer background
              color: "#EDE0D4",
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "12px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.2s ease-in-out",
              '&:hover': {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box sx={{ marginRight: "12px", color: "#FFD700" }}>{stat.icon}</Box>
            <CardContent
              sx={{
                background: "linear-gradient(to bottom, #F5E1C2, #FFF5E1)", // Lighter card content for contrast
                borderRadius: "8px",
                padding: "10px 16px",
                width: "100%",
                boxShadow: "inset 0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6D4C41" }}>
                {stat.title}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "medium", color: "#5D4037" }}>{stat.value}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, color: "#8D6E63" }}>
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
