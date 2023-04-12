import { TextField, Typography } from "@mui/material";
import React from "react";

export default function InputBoxWithTopLabel({ info }) {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>{info.label}</Typography>
      <TextField
        fullWidth
        placeholder={info.place}
        sx={{
          border: "2px solid #FD5C25",
          borderRadius: 3,
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      />
    </div>
  );
}
