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
          src="https://previews.123rf.com/images/elnur/elnur1112/elnur111202053/11571858-circle-with-lots-of-food-items.jpg"
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
