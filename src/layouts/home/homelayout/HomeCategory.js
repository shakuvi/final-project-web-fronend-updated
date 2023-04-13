import React from "react";
import HomeSubHeader from "../../common/homelayout/HomeSubHeader";
import CategoryItem from "../../../components/category/CategoryItem";
import { Grid } from "@mui/material";

export default function HomeCategory() {
  return (
    <div>
      <HomeSubHeader info={{ name: "Category", route: "category" }} />
      <Grid container spacing={3}>
        <Grid item>
          <CategoryItem />
        </Grid>
        <Grid item>
          <CategoryItem />
        </Grid>
        <Grid item>
          <CategoryItem />
        </Grid>
        <Grid item>
          <CategoryItem />
        </Grid>
        <Grid item>
          <CategoryItem />
        </Grid>
        <Grid item>
          <CategoryItem />
        </Grid>
      </Grid>
    </div>
  );
}
