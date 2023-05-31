import React from "react";
import HomeSubHeader from "../../common/homelayout/HomeSubHeader";
import { Typography } from "@mui/material";

export default function HomePopularThisWeek() {
  return (
    <div>
      <HomeSubHeader info={{ name: "Popular This Week" }} />
      <Typography sx={{ textAlign: "center", fontFamily: "Poppins" }}>
        Currently not enough data...
      </Typography>
    </div>
  );
}
