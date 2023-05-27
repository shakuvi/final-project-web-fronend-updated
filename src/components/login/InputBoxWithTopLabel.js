import { TextField, Typography } from "@mui/material";
import React from "react";

export default function InputBoxWithTopLabel({
  label,
  placeholder,
  handleChange,
  name,
  password,
}) {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography style={{ fontFamily: "Poppins" }}>{label}</Typography>
      <TextField
        type={password}
        onChange={(e) => handleChange(e.target.value, name)}
        fullWidth
        placeholder={placeholder}
        InputProps={{
          style: {
            fontFamily: "Poppins",
          },
        }}
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
