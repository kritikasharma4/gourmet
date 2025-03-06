import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import TopBar from "./Topbar";
import CardSlider from "./CardSlider";
import DailyStreak from "./DailyStreak";

const MainLeaderboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "row",
        position: "relative",
        backgroundImage: "url('/doodle1.jpg.png')", // Ensure correct path
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content (Scrollable) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          padding: "20px",
          position: "relative",
          zIndex: 1,
          overflowY: "auto", // Enables scrolling
        }}
      >
        {/* TopBar (Fixed at the top) */}
        <Box sx={{ position: "sticky", top: 0, zIndex: 10 }}>
          <TopBar />
        </Box>

        {/* Leaderboard & CardSlider Section */}
        <Box
          sx={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "20px",
          }}
        >
          <Leaderboard sx={{ width: "550px" }} />
          <CardSlider />
        </Box>

        {/* Daily Streak with Your Custom Gradient Background */}
        <Box
          sx={{
            width: "100%",
            background:  "linear-gradient(135deg, #FAF3E0 30%,rgb(240, 221, 190) 90%)", // Adjusted from your color palette
            color: "#fff", // Light text for contrast
            padding: "20px",
            marginTop: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Stronger shadow for depth
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DailyStreak />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLeaderboard;
