import { Button } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogOutButton() {
  return (
    <div>
      <Button
        href="https://plymouthfinal.live/bestfood/"
        endIcon={<LogoutIcon />}
        sx={{
          width: "80%",
          textTransform: "none",
          padding: 1,
          color: "#FD5C25",
          border: "1px solid #FD5C25",
          fontFamily: "Poppins",
        }}
      >
        Log Out
      </Button>
    </div>
  );
}
