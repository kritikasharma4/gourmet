import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sidebar from "./pages/Sidebar";
import CreatePost from "./pages/CreatePost";
import { Box } from "@mui/material";
import MainLeaderboard from "./pages/MainLeaderboard";
import Feeds from "./pages/Feeds";

function DashboardLayout() {
  return (
    <Box display="flex" sx={{ background: "#F0E8C8", minHeight: "100vh", border: "2px solid #6C6A64", width: "100vw" }}>
      <Sidebar />
      <Box flex={1} display="flex" justifyContent="center" alignItems="center" padding={3}>
        <CreatePost />
      </Box>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/leaderboard" element={<MainLeaderboard />} />
        <Route path="/feed" element={<Feeds />} />
      </Routes>
    </Router>
  );
}

export default App;
