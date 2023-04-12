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
          border: "none",
          boxShadow: "none",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderWidth: "2px",
              borderColor: "#FD5C25",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: "#FD5C25",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FD5C25",
              borderWidth: "2px",
            },
            "&.Mui-error fieldset": {
              borderColor: "#f44336",
            },
          },
        }}
      />
    </div>
  );
}
