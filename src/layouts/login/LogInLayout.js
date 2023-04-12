import { Typography } from "@mui/material";
import React from "react";
import InputBoxWithTopLabel from "../../components/login/InputBoxWithTopLabel";
import LoginButton from "../../components/login/LoginButton";

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
          info={{ label: "Email", place: "Enter your user name" }}
        />
      </div>
      <div style={{ paddingTop: 10 }}>
        <InputBoxWithTopLabel
          info={{ label: "Password", place: "Enter your password" }}
        />
      </div>
      <div style={{ paddingTop: 25 }}>
        <LoginButton />
      </div>
    </div>
  );
}
