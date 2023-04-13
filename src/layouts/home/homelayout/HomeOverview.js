import { Avatar, Grid, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import React from "react";
import StatisficationItem from "./homeoverview/StatisficationItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export default function HomeOverview() {
  return (
    <div>
      <Grid container alignItems="center" pl={1} pt={1}>
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
      <Grid container justifyContent="space-evenly" pt={3}>
        <Grid item xs="3">
          <StatisficationItem
            info={{
              label: "Food Delovered",
              value: "445",
              icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 80 }} />,
            }}
          />
        </Grid>
        <Grid item xs="3">
          <StatisficationItem
            info={{
              label: "Satisfaction Rating",
              value: "98.7%",
              icon: <StarBorderOutlinedIcon sx={{ fontSize: 80 }} />,
            }}
          />
        </Grid>
        <Grid item xs="3">
          <StatisficationItem
            info={{
              label: "Balance",
              value: "LKR 27599.87",
              icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 80 }} />,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
