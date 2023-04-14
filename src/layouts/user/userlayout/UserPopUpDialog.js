import React from "react";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import { Avatar, Grid, Typography } from "@mui/material";
import UserInputBoxWithLabel from "../../../components/user/UserInputBoxWithLabel";

export default function UserPopUpDialog() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Add User</Typography>
      <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }}>
        F
      </Avatar>
      <Grid container spacing={2}>
        <Grid item>
          <UserInputBoxWithLabel />
          <UserInputBoxWithLabel />
        </Grid>
        <Grid item>
          <UserInputBoxWithLabel />
          <UserInputBoxWithLabel />
        </Grid>
      </Grid>
      <PopUpDialogActionButton />
    </div>
  );
}
