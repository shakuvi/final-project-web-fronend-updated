import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IconButton } from "@mui/material";

export default function CatergoryEditItem() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        width: "40px",
        height: "40px",
        position: "absolute",
        borderRadius: "50px",
        bottom: 5,
        border: "1px solid black",
        backgroundColor: "#FFFFFF",
      }}
    >
      <IconButton aria-label="add to shopping cart">
        <EditOutlinedIcon />
      </IconButton>
    </div>
  );
}
