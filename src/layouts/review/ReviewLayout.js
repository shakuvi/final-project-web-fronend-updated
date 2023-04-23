import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Grid } from "@mui/material";
import ReviewCard from "./reviewlayout/ReviewCard";

export default function ReviewLayout() {
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails label="Review" />
      <Grid container pt={5} justifyContent="center">
        <Grid item xs={5} pb={2}>
          <ReviewCard />
        </Grid>
        <Grid item xs={5}>
          <ReviewCard />
        </Grid>
        <Grid item xs={5}>
          <ReviewCard />
        </Grid>
        <Grid item xs={5}>
          <ReviewCard />
        </Grid>
      </Grid>
    </div>
  );
}
