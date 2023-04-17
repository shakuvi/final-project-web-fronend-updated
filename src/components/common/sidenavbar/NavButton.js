import React from "react";
import { Button } from "@mui/material";

export default function NavButton({ title, image, isActive }) {
  return (
    <Button
      startIcon={image}
      sx={{
        width: "90%",
        textTransform: "none",
        backgroundColor: isActive ? "#FE6329" : "",
        color: isActive ? "#FFFFFF" : "#666666",
        padding: 1,
        textAlign: "left",
        justifyContent: "left",
        paddingLeft: "50px",
        pointerEvents: isActive ? "none" : "auto",
      }}
    >
      {title}
    </Button>
  );
}
