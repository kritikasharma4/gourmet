import React, { useState } from "react";
import { Container, TextField, Button, Checkbox, Typography, Link, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import backgroundImage from "../assets/image11.png"; // Ensure correct path
import "../assets/fonts/fonts.css";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      localStorage.setItem("token", response.data.token);
      alert("Signup successful");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Box display="flex" width="100vw">
      <Box display="flex" height="100vh" alignItems="center" justifyContent="center" sx={{ background: "#f2ebd0", padding: "0 80px" }}>
        <Box display="flex" alignItems="center" gap={8} width="100%" maxWidth="900px">
          {/* Sign Up Form */}
          <Box width={450} padding={4} bgcolor="#f2ebd0" borderRadius={4} boxShadow={5} textAlign="center">
            <Typography variant="h2" fontWeight="bold" color="#000" sx={{ fontFamily: "Nico Moji, sans-serif" }}>
              GOURMET
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
              Create an account to get started
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField fullWidth label="Full Name" margin="dense" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} sx={{ background: "#F7F1D7", borderRadius: "12px" , boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", '& fieldset': { border: 'none' } }} />
            <TextField fullWidth label="Email address" margin="dense" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ background: "#F7F1D7", borderRadius: "12px" , boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", '& fieldset': { border: 'none' }}} />
            <TextField fullWidth label="Password" type="password" margin="dense" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ background: "#F7F1D7", borderRadius: "12px" , boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", '& fieldset': { border: 'none' }}} />
            <TextField fullWidth label="Confirm Password" type="password" margin="dense" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} sx={{ background: "#F7F1D7", borderRadius: "12px" , boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", '& fieldset': { border: 'none' }}} />
            <Box display="flex" alignItems="center" width="100%" sx={{ mt: 1 }}>
              <Checkbox sx={{ color: "#7d9272" }} />
              <Typography variant="body2">
                I agree to the <Link href="#" underline="hover" sx={{ color: "#7d9272" }}>Terms & Conditions</Link>
              </Typography>
            </Box>
            <Button fullWidth variant="contained" onClick={handleSignUp} sx={{ mt: 1.5, backgroundColor: "#233B20", borderRadius: "30px" }}>
              Sign Up
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ my: 1 }}>
              — Or —
            </Typography>
            <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ backgroundColor: "#fff", color: "black", border: "1px solid #ddd", "&:hover": { backgroundColor: "#f8f8f8" } }}>
              Sign up with Google
            </Button>
            <Typography variant="body2" sx={{ mt: 1.5 }}>
              Already have an account? {" "}
              <Link href="/login" underline="hover" sx={{ color: "#7d9272" }}>
                Login
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

export default SignUp;
