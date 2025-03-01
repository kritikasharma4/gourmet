import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import FriendsLeaderboard from "./FriendsLeaderboard";

const MainLeaderboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#6C6A64",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Leaderboard Section */}
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Leaderboard />
      </Box>

      {/* Friends Leaderboard Section */}
      <Box sx={{ flex: 1, padding: "20px" }}>
        <FriendsLeaderboard />
      </Box>
    </Box>
  );
};

export default MainLeaderboard;
