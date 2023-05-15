import { Select, Typography } from "@mui/material";
import React from "react";

export default function UserTypeSelector() {
  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Select Category</Typography>
      <Select
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
        {/* {allCatergoryList.length > 0 &&
          allCatergoryList.map((val, key) => {
            return (
              <MenuItem key={key} value={val._id}>
                {val.name}
              </MenuItem>
            );
          })} */}
      </Select>
    </div>
  );
}
