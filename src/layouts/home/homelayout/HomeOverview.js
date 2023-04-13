import { Grid } from "@mui/material";
import React from "react";
import StatisficationItem from "./homeoverview/StatisficationItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HomeHeaderWithUserDetails from "../../common/homelayout/HomeHeaderWithUserDetails";

export default function HomeOverview() {
  return (
    <div>
      <HomeHeaderWithUserDetails info={{ label: "Overview" }} />
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
