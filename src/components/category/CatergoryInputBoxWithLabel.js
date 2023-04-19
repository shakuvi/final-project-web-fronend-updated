import { TextField, Typography } from "@mui/material";
import React from "react";

export default function CatergoryInputBoxWithLabel({
  name,
  value,
  handleChange,
}) {
  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Catergory</Typography>
      <TextField
        value={value}
        onChange={(e) => handleChange(e.target.value, name)}
        sx={{
          width: "400px",
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
