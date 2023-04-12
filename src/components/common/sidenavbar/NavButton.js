import React from "react";
import { Button } from "@mui/material";

export default function NavButton({ info }) {
  return (
    <div>
      <Button
        startIcon={info.image}
        sx={{
          width: "80%",
          textTransform: "none",
          color: "#666666",
          padding: 1,
          textAlign: "left",
        }}
      >
        {info.title}
      </Button>
    </div>
  );
}
