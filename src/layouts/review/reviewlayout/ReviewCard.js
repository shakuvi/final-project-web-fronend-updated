import { Avatar, Divider, Grid, Rating, Typography } from "@mui/material";
import React from "react";

export default function ReviewCard({ val }) {
  return (
    <div
      style={{
        width: 500,
        height: 200,
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <Grid container alignItems="center" pt={2} pb={2}>
        <Grid item xs={2} pl={3}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item xs={10}>
          <Grid container justifyContent="space-between">
            <Grid item pl={3}>
              {val.userId.userName}
            </Grid>
            <Grid item>
              <Rating name="simple-controlled" value={val.rateValue} readOnly />
            </Grid>
            <Grid item pr={3}>
              {val.sentiment === "Positive" ? (
                <div> 😀</div>
              ) : val.sentiment === "Negative" ? (
                <div>😖</div>
              ) : val.sentiment === "Neutral" ? (
                <div> 🙂</div>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid container alignItems="center" pt={2} justifyContent="center">
        <Grid item xs={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://img4.goodfon.com/wallpaper/nbig/3/25/vkusniashki-lavash-salat-miaso-tykva-raznosti-eda.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography align="justify">{val.feedbackdetils}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
