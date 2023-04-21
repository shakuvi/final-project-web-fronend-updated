import { Button } from "@mui/material";
import React from "react";

export default function OrderStatusButton({
  backgroundColor,
  isActive,
  color,
  name,
}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 120,
        }}
        style={{
          backgroundColor: isActive ? backgroundColor : "white",
          color: color,
        }}
      >
        {name}
      </Button>
    </div>
  );
}
