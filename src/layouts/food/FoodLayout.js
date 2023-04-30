import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Dialog, Grid } from "@mui/material";
import FoodDetails from "./foodlayout/FoodDetails";

export default function FoodLayout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
