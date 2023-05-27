import { Button } from "@mui/material";
import React from "react";

export default function UserAddButton({ handleClick }) {
  return (
    <div>
      <Button
        onClick={handleClick}
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
