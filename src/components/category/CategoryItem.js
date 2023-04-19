import React from "react";
import CatergoryEditItem from "./CatergoryEditItem";
import { Typography } from "@mui/material";

export default function CategoryItem({
  name,
  isEditVisible,
  image,
  handleEdit,
  handleClearLoadingStatus,
}) {
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
        <img
          alt=""
          width="100px"
          src="https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg?w=2000"
        />
        <Typography>{name}</Typography>
      </div>
      {isEditVisible ? (
        <CatergoryEditItem
          handleEdit={handleEdit}
          handleClearLoadingStatus={handleClearLoadingStatus}
        />
      ) : (
        ""
      )}
    </div>
  );
}
