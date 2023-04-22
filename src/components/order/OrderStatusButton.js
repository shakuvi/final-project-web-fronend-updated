import { Button } from "@mui/material";
import React from "react";

export default function OrderStatusButton({
  backgroundColor,
  isActive,
  color,
  name,
  handleStatusClick,
}) {
  return (
    <div>
      <Button
        onClick={handleStatusClick}
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
