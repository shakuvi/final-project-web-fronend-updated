import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import UserInputBoxWithLabel from "../../../components/user/UserInputBoxWithLabel";
import UserAddButton from "../../../components/user/UserAddButton";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const { userSelectedEmployee } = useSelector(
    (store) => store.employeeReducer
  );

  console.log(userSelectedEmployee);
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
          <UserInputBoxWithLabel
            name="User Name"
            value={userSelectedEmployee.userName}
          />
          <UserInputBoxWithLabel
            name="Phone Number"
            value={userSelectedEmployee.mobileNumber}
          />
          <UserInputBoxWithLabel
            name="Email Address"
            value={userSelectedEmployee.email}
          />
        </Grid>
        <Grid item>
          <UserInputBoxWithLabel
            name="Password"
            value={userSelectedEmployee.password}
          />
          <UserInputBoxWithLabel
            name="Date of Birth"
            value={userSelectedEmployee.dateOfBirth}
          />
          <div style={{ paddingTop: 30 }}>
            <UserAddButton />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
