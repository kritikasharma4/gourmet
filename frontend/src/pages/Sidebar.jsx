import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { DynamicFeed, Chat, AddBox, Leaderboard, Person, Logout, HelpOutline } from "@mui/icons-material";
import LogoIcon from "../assets/logo.png"; // Correct way to import image

const Sidebar = () => {
  const [active, setActive] = useState(0);

  const menuItems = [
    { icon: <DynamicFeed />, id: 0 },  // Feed
    { icon: <Chat />, id: 1 },  // Message
    { icon: <AddBox />, id: 2 },  // New Post
    { icon: <Leaderboard />, id: 3 },  // Leaderboard
    { icon: <Person />, id: 4 },  // Profile
    { icon: <Logout />, id: 5 },  // Sign Out
  ];

  return (
    <Box
      sx={{
        width: 70,
        height: "95vh",
        bgcolor: "#6C6A64",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderRadius: "0 0 0 0",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      {/* Logo */}
      <Box sx={{ padding: "5px 0" }}>
        <img src={LogoIcon} alt="Logo" width={40} />
      </Box>

      {/* Navigation Icons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {menuItems.map((item) => (
          <IconButton
            key={item.id}
            onClick={() => setActive(item.id)}
            sx={{
              backgroundColor: active === item.id ? "#3A3A3A" : "transparent",
              color: "white",
              borderRadius: "12px",
              width: "50px",
              height: "50px",
              "&:hover": { bgcolor: "#3A3A3A" },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>

      {/* Help Icon at Bottom */}
      <Box sx={{ paddingBottom: "5px" }}>
        <IconButton
          sx={{
            backgroundColor: "#5C5C5C",
            color: "white",
            borderRadius: "12px",
            width: "50px",
            height: "50px",
          }}
        >
          <HelpOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
