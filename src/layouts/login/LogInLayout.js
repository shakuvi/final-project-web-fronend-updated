import { Typography } from "@mui/material";
import React from "react";
import InputBoxWithTopLabel from "../../components/login/InputBoxWithTopLabel";
import LoginButton from "../../components/login/LoginButton";
import { NavLink } from "react-router-dom";

export default function LogInLayout() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "30%",
      }}
    >
      <Typography>Log In</Typography>

      <div style={{ paddingTop: 10 }}>
        <InputBoxWithTopLabel
          label="User Name"
          placeholder="Enter your user name"
        />
      </div>
      <div style={{ paddingTop: 10 }}>
        <InputBoxWithTopLabel
          label="Password"
          placeholder="Enter your password"
        />
      </div>
      <div style={{ paddingTop: 25 }}>
        <NavLink style={{ textDecoration: "none" }} to={`/home`}>
          <LoginButton />
        </NavLink>
      </div>
    </div>
  );
}
