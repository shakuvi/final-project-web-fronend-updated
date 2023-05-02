import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";

export default function FoodCatergorySelector({ value }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(value);

  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Select Catergory</Typography>
      <Select
        value={age}
        onChange={handleChange}
        sx={{
          width: "300px",
          border: "2px solid #FD5C25",
          boxShadow: "none",
          outline: "none",
          "&:hover": {
            backgroundColor: "initial",
          },
          "&:focus": {
            backgroundColor: "initial",
            outline: "none",
          },
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}
