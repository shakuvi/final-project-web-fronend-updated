import React, { useEffect } from "react";
import CategoryItem from "../../components/category/CategoryItem";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCatergoryLoadingStatus,
  getAllCatergories,
  setUserSelectedCatergory,
} from "../../store/actions/categoryAction";

export default function CatergoryLayout({ info }) {
  const dispatch = useDispatch();
  const { catergoryUpdateLoadingStatus: loadingStatus } = useSelector(
    (store) => store.catergoryReducer
  );

  const handleClearLoadingStatus = () => {
    dispatch(clearCatergoryLoadingStatus());
  };
  
  useEffect(() => {
    console.log(loadingStatus);
    if (loadingStatus === "completed") {
      console.log(loadingStatus);
      dispatch(getAllCatergories());
    }
  }, [dispatch, loadingStatus]);

  const handleEdit = (catergory) => {
    console.log(catergory);
    dispatch(setUserSelectedCatergory(catergory));
  };
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails label="Catergory" />
      <Grid container>
        {info.map((val, key) => {
          return (
            <Grid item xs={2} key={key}>
              <CategoryItem
                handleClearLoadingStatus={handleClearLoadingStatus}
                name={val.name}
                image={val.image}
                isEditVisible
                handleEdit={() => handleEdit(val)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
