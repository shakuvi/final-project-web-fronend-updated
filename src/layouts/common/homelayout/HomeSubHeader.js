import { Grid, Typography } from "@mui/material";
import React from "react";

export default function HomeSubHeader({ info }) {
  return (
    <div>
      <Grid container justifyContent="space-between" pt={2}>
        <Grid item pl={1}>
          <Typography>{info.name}</Typography>
        </Grid>
        <Grid item pr={10}>
          <Typography>View all</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
