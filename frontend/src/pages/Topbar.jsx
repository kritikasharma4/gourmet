import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "93.5%", height: "25%",padding: "25px 35px", backgroundColor: "#2C3A3A" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Nico Moji', sans-serif",
          fontWeight: "bold",
          color: "#FFFFFF",
        }}
      >
        Gourmet
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search posts..."
        size="small"
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          minWidth: "400px",
          maxWidth: "400px",
          "& .MuiOutlinedInput-root": {
            paddingLeft: "10px",
            "& fieldset": { border: "none" },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TopBar;
