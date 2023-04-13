import React from "react";
import CategoryItem from "../../components/category/CategoryItem";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import CatergoryEditItem from "../../components/category/CatergoryEditItem";
import AddIcon from "@mui/icons-material/Add";

export default function CatergoryLayout() {
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails info={{ label: "Catergory" }} />
      <CategoryItem isEditVisible={<CatergoryEditItem />} />
      <CategoryItem info={<AddIcon />} />
    </div>
  );
}
