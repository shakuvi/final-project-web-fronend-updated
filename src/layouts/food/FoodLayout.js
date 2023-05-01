import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Dialog, Grid } from "@mui/material";
import FoodDetails from "./foodlayout/FoodDetails";
import CategoryItem from "../../components/category/CategoryItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserSelectedCatergory } from "../../store/actions/categoryAction";

export default function FoodLayout({ allCatergoryList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectCatergory = (catergory) => {
    dispatch(setUserSelectedCatergory(catergory));
    navigate("/catergory/foods");
  };

  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails
        label="Food"
        buttonName="Add New"
        isEditVisible
        handleClickOpen={handleClickOpen}
      />

      <Grid container>
        {allCatergoryList.map((val, key) => {
          return (
            <Grid item xs={2} key={key}>
              <div onClick={() => handleSelectCatergory(val)}>
                <CategoryItem name={val.name} image={val.image} />
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="xl"
          PaperProps={{
            style: {
              width: "80%",
              height: "80%",
            },
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item>
              <FoodDetails />
            </Grid>
          </Grid>
        </Dialog>
      </div>
    </div>
  );
}
