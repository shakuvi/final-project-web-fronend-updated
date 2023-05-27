import { TextField, Typography } from "@mui/material";
import React from "react";

export default function CatergoryInputBoxWithLabel({
  name,
  value,
  handleChange,
  rows,
  fieldname,
}) {
  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography sx={{ fontFamily: "Poppins" }}>{fieldname}</Typography>
      <TextField
        value={value}
        onChange={(e) => handleChange(e.target.value, name)}
        multiline={true} // add multiline prop
        rows={rows} // set number of rows
        inputProps={{
          style: {
            fontFamily: "Poppins", // Add fontFamily property for the text value
          },
        }}
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
