import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeSubHeader({ info }) {
  return (
    <div>
      <Grid container justifyContent="space-between" pt={2}>
        <Grid item pl={1} sx={{ color: "#FD5C25" }}>
          <Typography sx={{ fontFamily: "Poppins" }}>{info.name}</Typography>
        </Grid>
        <Grid item pr={10}>
          <NavLink style={{ textDecoration: "none" }} to={`/${info.route}`}>
            <Typography sx={{ color: "#FD5C25" }}>View all</Typography>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
}
