import { Avatar, Grid, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import React from "react";

export default function HomeOverview() {
  return (
    <div>
      <Grid container alignItems="center" pt={1}>
        <Grid item xs={6}>
          <Typography>Overview</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item container alignItems="center" justifyContent="flex-end">
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
    </div>
  );
}
