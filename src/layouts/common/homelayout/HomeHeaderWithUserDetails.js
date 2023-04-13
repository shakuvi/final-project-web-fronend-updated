import { Avatar, Grid, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import React from "react";

export default function HomeHeaderWithUserDetails({ info }) {
  return (
    <Grid container alignItems="center" pl={1} pt={1}>
      <Grid item xs={6}>
        <Typography sx={{ color: "#FD5C25" }}>{info.label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item xs={1}>
            <CircleNotificationsIcon fontSize="large" />
          </Grid>
          <Grid item xs={1}>
            <Avatar>R</Avatar>
          </Grid>
          <Grid item xs={2}>
            <Typography>Radika</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
