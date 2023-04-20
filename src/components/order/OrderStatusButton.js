import { Button } from "@mui/material";
import React from "react";

export default function OrderStatusButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 120,
        }}
        style={{ backgroundColor: "#DAFFAA", color: "#216708" }}
      >
        Save
      </Button>
    </div>
  );
}
