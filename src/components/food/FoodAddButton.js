import { Button } from "@mui/material";
import React from "react";

export default function FoodAddButton({ handleSaveUpate }) {
  return (
    <div>
      <Button
        onClick={handleSaveUpate}
        variant="contained"
        sx={{
          textTransform: "none",
          width: 200,
          fontFamily: "Poppins",
        }}
        style={{ background: "linear-gradient(to right, #FE6329, #FDBB29)" }}
      >
        Save
      </Button>
    </div>
  );
}
