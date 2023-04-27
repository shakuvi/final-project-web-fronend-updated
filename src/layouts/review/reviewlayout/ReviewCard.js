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
              {val.userID.userName}
            </Grid>
            <Grid item>
              <Rating name="simple-controlled" value={val.rateValue} readOnly />
            </Grid>
            <Grid item pr={3}>
              {val.sentiment === "positive" ? (
                <div> 😀</div>
              ) : val.sentiment === "negative" ? (
                <div>😖</div>
              ) : val.sentiment === "neutral" ? (
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
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography>{val._id}</Typography>
          <Typography align="justify">{val.feedbackdetils}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
