import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";

// Generate mock activity data for the past month (30 days)
const generateMockActivity = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({
      posts: Math.floor(Math.random() * 3), // 0 to 2 posts
      likes: Math.floor(Math.random() * 6), // 0 to 5 likes
      coins: Math.floor(Math.random() * 300), // 0 to 300 coins
    });
  }
  return data;
};

const userActivity = generateMockActivity();

// Define streak thresholds (min activity required per day)
const STREAK_THRESHOLD = { posts: 1, likes: 2, coins: 100 };

// Function to determine if a day meets the streak criteria
const meetsThreshold = (day) =>
  day.posts >= STREAK_THRESHOLD.posts ||
  day.likes >= STREAK_THRESHOLD.likes ||
  day.coins >= STREAK_THRESHOLD.coins;

// Function to calculate current streak and highest streak
const calculateStreaks = (activityData) => {
  let currentStreak = 0,
    maxStreak = 0,
    tempStreak = 0;

  for (let i = 0; i < activityData.length; i++) {
    if (meetsThreshold(activityData[i])) {
      tempStreak++;
      maxStreak = Math.max(maxStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  currentStreak = tempStreak; // Last ongoing streak
  return { currentStreak, maxStreak };
};

// Function to get color based on activity level
const getColor = (day) => {
  const totalActivity = day.posts + day.likes + day.coins / 100;
  if (totalActivity === 0) return "#e0d3c4"; // No activity
  if (totalActivity < 3) return "#c7a589";
  if (totalActivity < 5) return "#a07854";
  if (totalActivity < 7) return "#8f5a3a";
  return "#5a2d16"; // High activity
};

const DailyStreak = () => {
  const { currentStreak, maxStreak } = calculateStreaks(userActivity);

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 4,
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(to right,rgb(176, 122, 86),rgb(230, 182, 129))",
        color: "#fff",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Streak Counters */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Monthly Activity Streak
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Current Streak: <strong>{currentStreak} Days</strong> 🔥 | Best Streak:{" "}
        <strong>{maxStreak} Days</strong> 🏆
      </Typography>

      {/* Heatmap Grid (30 days in 5 rows of 6 columns) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 20px)",
          gridTemplateRows: "repeat(5, 20px)",
          gap: "5px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {userActivity.map((day, index) => (
          <Tooltip
            key={index}
            title={`Day ${index + 1}: ${day.posts} Posts, ${day.likes} Likes, ${day.coins} Coins`}
            arrow
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: getColor(day),
                borderRadius: "4px",
                transition: "0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default DailyStreak;
