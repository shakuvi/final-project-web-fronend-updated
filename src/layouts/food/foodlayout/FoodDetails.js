import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import FoodInputBoxWithLabel from "../../../components/food/FoodInputBoxWithLabel";
import FoodAddButton from "../../../components/food/FoodAddButton";
import FoodCatergorySelector from "../../../components/food/FoodCatergorySelector";
import { useSelector } from "react-redux";

export default function FoodDetails({ handleFoodChange, handleSaveUpate }) {
  const { employeeSelectedFood } = useSelector((store) => store.foodReducer);
  console.log(employeeSelectedFood);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ color: "#FD5C25" }}>Add Food</Typography>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <FoodInputBoxWithLabel
            fieldName="Name"
            value={employeeSelectedFood.name}
            handleFoodChange={handleFoodChange}
            name="name"
          />
          <FoodInputBoxWithLabel
            fieldName="Description"
            rows={4}
            value={employeeSelectedFood.description}
            handleFoodChange={handleFoodChange}
            name="description"
          />
        </Grid>
        <Grid item>
          <FoodCatergorySelector value={employeeSelectedFood.category?._id} />
          <FoodInputBoxWithLabel
            fieldName="Price"
            value={employeeSelectedFood.price}
            handleFoodChange={handleFoodChange}
            name="price"
          />
        </Grid>
      </Grid>
      <div style={{ paddingTop: 15 }}>
        <FoodAddButton handleSaveUpate={handleSaveUpate} />
      </div>
    </div>
  );
}
