import { Typography } from "@mui/material";
import React from "react";
import CatergoryInputBoxWithLabel from "../../../components/category/CatergoryInputBoxWithLabel";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";

export default function CatergoryEditLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Catergory Edit</Typography>
      <img
        alt=""
        width="100px"
        src="https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg?w=2000"
      />
      <div style={{ paddingTop: 10 }}>
        <Typography>Upload Photo</Typography>
      </div>
      <CatergoryInputBoxWithLabel />
      <PopUpDialogActionButton />
    </div>
  );
}
