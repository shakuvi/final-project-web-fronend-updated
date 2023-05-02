import { Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export default function CatergoryAdd() {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "150px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 2px #FE6329",
          borderRadius: 20,
        }}
      >
        <AddIcon sx={{ fontSize: 70 }} />
        <Typography>Add</Typography>
      </div>
    </div>
  );
}
