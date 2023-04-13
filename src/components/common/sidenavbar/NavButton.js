import React from "react";
import { Button } from "@mui/material";

export default function NavButton({ info }) {
  return (
    <div>
      <Button
        startIcon={info.image}
        sx={{
          width: "90%",
          textTransform: "none",
          color: "#666666",
          padding: 1,
          textAlign: "left",
          justifyContent: "left",
          paddingLeft: "50px",
        }}
      >
        {info.title}
      </Button>
    </div>
  );
}
