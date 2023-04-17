import React from "react";
import CategoryItem from "../../components/category/CategoryItem";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function CatergoryLayout() {
  const { allCatergoryList } = useSelector((store) => store.catergoryReducer);
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails label="Catergory" />
      <Grid container>
        {allCatergoryList.map((val, key) => {
          return (
            <Grid item xs={2} key={key}>
              <CategoryItem info={val} isEditVisible />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
