import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import FoodInputBoxWithLabel from "../../../components/food/FoodInputBoxWithLabel";
import FoodAddButton from "../../../components/food/FoodAddButton";

export default function FoodDetails() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ color: "#FD5C25" }}>Add User</Typography>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <FoodInputBoxWithLabel fieldName="Name" />
          <FoodInputBoxWithLabel fieldName="Description" rows={4} />
        </Grid>
        <Grid item>
          <FoodInputBoxWithLabel />
          <FoodInputBoxWithLabel fieldName="Price" />
        </Grid>
      </Grid>
      <div style={{ paddingTop: 15 }}>
        <FoodAddButton />
      </div>
    </div>
  );
}
