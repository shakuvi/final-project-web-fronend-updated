import React from "react";
import HomeSubHeader from "../../common/homelayout/HomeSubHeader";
import CategoryItem from "../../../components/category/CategoryItem";
import { Grid } from "@mui/material";

export default function HomeCategory({ info }) {
  return (
    <div>
      <HomeSubHeader info={{ name: "Category", route: "category" }} />
      <Grid container>
        {info.slice(0, 6).map((val, key) => {
          return (
            <Grid item xs={2} key={key}>
              <CategoryItem />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
