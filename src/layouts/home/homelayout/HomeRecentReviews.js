import React from "react";
import HomeSubHeader from "../../common/homelayout/HomeSubHeader";
import { Typography } from "@mui/material";

export default function HomeRecentReviews() {
  return (
    <div>
      <HomeSubHeader info={{ name: "Recent Reviews", route: "review" }} />
      <Typography sx={{ textAlign: "center", fontFamily: "Poppins" }}>
        Currently not enough data...
      </Typography>
    </div>
  );
}
