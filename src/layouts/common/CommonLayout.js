import React from "react";
import SideNavBar from "./sidenavbar/SideNavBar";
import { Grid } from "@mui/material";

export default function CommonLayout({ children }) {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SideNavBar />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}
