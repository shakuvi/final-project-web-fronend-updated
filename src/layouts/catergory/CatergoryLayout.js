import React from "react";
import CategoryItem from "../../components/category/CategoryItem";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Grid } from "@mui/material";

export default function CatergoryLayout({ info, loading }) {
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails label="Catergory" />
      <Grid container>
        {info.map((val, key) => {
          return (
            <Grid item xs={2} key={key}>
              <CategoryItem name={val.name} image={val.image} isEditVisible />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
