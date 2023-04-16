import React from "react";
import { Button } from "@mui/material";

export default function NavButton({ title, image, isActive }) {
  return (
    <Button
      startIcon={image}
      sx={{
        width: "90%",
        textTransform: "none",
        color: "#666666",
        backgroundColor: isActive ? "#FE6329" : "",
        padding: 1,
        textAlign: "left",
        justifyContent: "left",
        paddingLeft: "50px",
      }}
    >
      {title}
    </Button>
  );
}
