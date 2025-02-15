import React from "react";
import { Container, TextField, Button, Checkbox, Typography, Link, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import backgroundImage from "../assets/image.png"; // Ensure correct path
import "../assets/fonts/fonts.css";

const Login = () => {
  return (
    <Box display="flex" width="100vw">
      <Box display="flex" height="100vh" alignItems="center" justifyContent="center" sx={{ background: "#f2ebd0", padding: "0 80px" }}>
        <Box display="flex" alignItems="center" gap={8} width="100%" maxWidth="900px">
          {/* Login Form */}
          <Box width={450} padding={3} bgcolor="#f2ebd0" borderRadius={4} boxShadow={5} textAlign="center">
          <Typography variant="h2" fontWeight="bold" color="#000" sx={{ fontFamily: "Nico Moji, sans-serif" }}>
            GOURMET
          </Typography>

            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Enter your Credentials to access your account
            </Typography>

            <TextField 
              fullWidth 
              label="Email address" 
              margin="normal" 
              variant="outlined" 
              sx={{ 
                background: "#F7F1D7", 
                borderRadius: "12px", 
                boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", 
                border: "none",
                '& fieldset': { border: 'none' },
                '& .MuiInputBase-input': { color: "black" },
                '& .MuiInputLabel-root': { color: "black" },
                '&:hover .MuiInputLabel-root': { color: "black" },
                '& .Mui-focused': { color: "black" }
              }} 
            />
            <TextField 
              fullWidth 
              label="Password" 
              type="password" 
              margin="normal" 
              variant="outlined" 
              sx={{ 
                background: "#F7F1D7", 
                borderRadius: "12px", 
                boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", 
                border: "none",
                '& fieldset': { border: 'none' },
                '& .MuiInputBase-input': { color: "black" },
                '& .MuiInputLabel-root': { color: "black" },
                '&:hover .MuiInputLabel-root': { color: "black" },
                '& .Mui-focused': { color: "black" }
              }} 
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <Box display="flex" alignItems="center">
                <Checkbox sx={{ color: "#7d9272" }} />
                <Typography variant="body2">Remember me</Typography>
              </Box>
              <Link href="#" variant="body2" underline="hover" sx={{ color: "#7d9272" }}>
                Forgot password?
              </Link>
            </Box>
            <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#233B20", borderRadius: "30px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" , "&:hover": { backgroundColor: "#233B23" } }}>
              Login
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ my: 2 }}>
              — Or —
            </Typography>

            <Button 
              fullWidth 
              variant="outlined" 
              startIcon={<GoogleIcon />} 
              sx={{ 
                mt: 1, 
                backgroundColor: "#fff", 
                color: "black", 
                border: "1px solid #ddd", 
                "&:hover": { backgroundColor: "#f8f8f8" } 
              }}
            >
              Sign in with Google
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Don't have an account? {" "}
              <Link href="#" underline="hover" sx={{ color: "#7d9272" }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Image Box */}
      <Box flex={1} height={"100vh"} width="100%" sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </Box>
  );
};

export default Login;
