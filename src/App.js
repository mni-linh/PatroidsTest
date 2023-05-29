import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import "./App.css";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
const CoverButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(5),
}));

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageSource = () => {
    return isHovered
      ? "https://www.sony.com.sg/microsite/gofullframemirrorless/assets/images/revamp/videowithsony/landing-video-play-hover.png"
      : "https://www.sony.com.sg/microsite/gofullframemirrorless/assets/images/revamp/videowithsony/landing-video-play.png";
  };
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        autoPlay
        loop
        muted
        component="video"
        src="https://www.sony.com.sg/microsite/gofullframemirrorless/videos/new-video-landing-bg-audio.mp4"
      />
      <Box
        sx={{
          background: "rgba(33, 38, 46,0.5)",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "25%",
          color: "white",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Bring your creative vision to life</Typography>
        <CoverButton>
          <IconButton component="div">
            <img
              alt="Hình ảnh"
              src={getImageSource()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* <PlayCircleOutline fontSize="large" /> */}
          </IconButton>
        </CoverButton>
        <CoverButton>
          <IconButton component="div">
            <img
              alt="Hình ảnh"
              src="https://www.sony.com.sg/microsite/gofullframemirrorless/assets/images/revamp/videowithsony/landing-arrow-down.png"
            />
          </IconButton>
        </CoverButton>
      </Box>
    </Box>
  );
}

export default App;
