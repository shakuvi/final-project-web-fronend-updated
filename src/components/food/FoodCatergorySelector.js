import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function FoodCatergorySelector({ value }) {
  const [selectedCategory, setSelectedCategory] = React.useState(value);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const { allCatergoryList } = useSelector((store) => store.catergoryReducer);
  console.log(allCatergoryList);

  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Select Category</Typography>
      <Select
        value={selectedCategory}
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
        {allCatergoryList.length > 0 &&
          allCatergoryList.map((val, key) => {
            return (
              <MenuItem key={key} value={val._id}>
                {val.name}
              </MenuItem>
            );
          })}
      </Select>
    </div>
  );
}
