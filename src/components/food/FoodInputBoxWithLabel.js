import { TextField, Typography } from "@mui/material";
import React from "react";

export default function FoodInputBoxWithLabel({
  rows,
  fieldName,
  value,
  name,
  handleFoodChange,
}) {
  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>{fieldName}</Typography>
      <TextField
        value={value}
        onChange={(e) => handleFoodChange(e.target.value, name)}
        multiline={true} // add multiline prop
        rows={rows} // set number of rows
        sx={{
          width: "300px",
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
