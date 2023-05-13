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
import CatergoryAdd from "../../components/category/CatergoryAdd";

export default function CatergoryLayout({ info }) {
  const dispatch = useDispatch();
  const {
    catergoryUpdateLoadingStatus: loadingStatus,
    catergoryCreteLoadingStatus,
  } = useSelector((store) => store.catergoryReducer);

  const { token } = useSelector((store) => store.employeeReducer);

  const handleClearLoadingStatus = () => {
    dispatch(clearCatergoryLoadingStatus());
  };

  useEffect(() => {
    console.log(loadingStatus);
    console.log(catergoryCreteLoadingStatus);
    if (
      loadingStatus === "completed" ||
      catergoryCreteLoadingStatus === "completed"
    ) {
      console.log(loadingStatus);
      console.log(catergoryCreteLoadingStatus);
      dispatch(getAllCatergories(token));
    }
  }, [dispatch, loadingStatus, catergoryCreteLoadingStatus, token]);

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
        <Grid item xs={2}>
          <CatergoryAdd />
        </Grid>
      </Grid>
    </div>
  );
}
