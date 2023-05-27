import { Grid, Typography } from "@mui/material";
import React from "react";

export default function StatisficationItem({ info }) {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        sx={{
          textAlign: "left",
          backgroundColor: "white",
          borderRadius: "8px",
          height: 110,
        }}
        spacing={1}
      >
        <Grid item>{info.icon}</Grid>
        <Grid item>
          <Typography sx={{ fontFamily: "Poppins" }}>{info.label}</Typography>
          <Typography sx={{ fontFamily: "Poppins" }}>{info.value}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
