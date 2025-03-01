import { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, Paper, Chip } from "@mui/material";
import { PhotoCamera, Tag, PersonAdd, Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [hashtagInput, setHashtagInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleHashtagAdd = () => {
    if (hashtagInput.trim() !== "") {
      setHashtags([...hashtags, hashtagInput.trim()]);
      setHashtagInput("");
    }
  };

  const handleTagAdd = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Post Submitted!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          maxWidth: 500,
          mx: "auto",
          background: "#F2EBD0",
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" color="#7D9272" align="center" gutterBottom fontWeight="bold">
          Create a Post
        </Typography>

        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            component="label"
            sx={{
              background: "#829777",
              color: "#fff",
              "&:hover": { background: "#7D9272" },
              fontWeight: "bold",
            }}
          >
            <PhotoCamera /> Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "2px solid #7D9272",
                }}
              >
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    background: "#7D9272",
                    color: "#fff",
                    "&:hover": { background: "#869977" },
                  }}
                  size="small"
                  onClick={handleImageRemove}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            </motion.div>
          )}

          <TextField
            label="Caption"
            variant="outlined"
            multiline
            rows={2}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            sx={{
              background: "#EFE6C9",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            }}
          />

          <Box display="flex" alignItems="center" gap={1}>
            <Tag color="action" />
            <TextField
              label="Add Hashtags"
              variant="outlined"
              size="small"
              value={hashtagInput}
              onChange={(e) => setHashtagInput(e.target.value)}
              sx={{ flex: 1, background: "#F0E7CA", borderRadius: 1 }}
            />
            <Button
              onClick={handleHashtagAdd}
              variant="contained"
              size="small"
              sx={{ background: "#7D9272", color: "#fff", "&:hover": { background: "#869977" } }}
            >
              Add
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {hashtags.map((hashtag, index) => (
              <Chip key={index} label={`#${hashtag}`} color="primary" />
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PersonAdd color="action" />
            <TextField
              label="Tag Friends"
              variant="outlined"
              size="small"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              sx={{ flex: 1, background: "#F0E7CA", borderRadius: 1 }}
            />
            <Button
              onClick={handleTagAdd}
              variant="contained"
              size="small"
              sx={{ background: "#7D9272", color: "#fff", "&:hover": { background: "#869977" } }}
            >
              Add
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {tags.map((tag, index) => (
              <Chip key={index} label={`@${tag}`} color="secondary" />
            ))}
          </Box>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "#7D9272",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": { background: "#869977" },
              }}
              fullWidth
            >
              Post
            </Button>
          </motion.div>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default CreatePost;
