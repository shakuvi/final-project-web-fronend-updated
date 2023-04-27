import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import UserInputBoxWithLabel from "../../../components/user/UserInputBoxWithLabel";
import UserAddButton from "../../../components/user/UserAddButton";

export default function UserDetails() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography>Add User</Typography>
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
          <UserInputBoxWithLabel name="Name" />
          <UserInputBoxWithLabel name="Phone Number" />
          <UserInputBoxWithLabel name="Email Address" />
        </Grid>
        <Grid item>
          <UserInputBoxWithLabel name="Password" />
          <UserInputBoxWithLabel name="Date of Birth" />
          <div style={{ paddingTop: 30 }}>
            <UserAddButton   />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
