import { Button } from "@mui/material";
import React from "react";

export default function FoodAddButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 200,
        }}
        style={{ background: "linear-gradient(to right, #FE6329, #FDBB29)" }}
      >
        Save
      </Button>
    </div>
  );
}
