import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PostTheme } from "../../shared/utils/PostTheme";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
//import FavoriteIcon from '@mui/icons-material/Favorite';

const PostItem = ({
  userName,
  profileAvartar,
  dateTime,
  postDescription,
  artImg,
  artPrice,
  id,
}) => {
  return (
    <ThemeProvider theme={PostTheme}>
      <Card
        sx={{
          display: "flex",
          minHeight: "400px",
          marginBottom: "20px",
          maxHeight: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "60% " }}>
          <CardContent className="flex items-start">
            <Avatar
              alt="Remy Sharp"
              src={profileAvartar}
              sx={{ width: 56, height: 56, marginRight: "10px" }}
            />
            <div>
              <Link to={`/${id}/profile`}>
                <p className="font-title capitalize font-semibold text-lg">
                  {userName}
                </p>
              </Link>
              <p className="font-title">{dateTime}</p>
            </div>
          </CardContent>
          <Box>
            <CardContent>
              <p className="text-justify">
                {postDescription}{" "}
                <Button href="#text-buttons" color="secondary">
                  ...See more
                </Button>
              </p>
            </CardContent>
            <CardContent>
              <FavoriteBorderIcon sx={{ mx: "40px" }} />
              <Button variant="contained" startIcon={<CommentIcon />}>
                Comment
              </Button>
            </CardContent>
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <CardMedia
            src={artImg}
            component="img"
            sx={{ height: "60%", marginBottom: "10px" }}
          />
          <CardContent>
            <p className="text-center mb-3 text-2xl font-semibold font-title">
              RS. {artPrice}
            </p>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ margin: "0 auto", display: "block" }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default PostItem;
