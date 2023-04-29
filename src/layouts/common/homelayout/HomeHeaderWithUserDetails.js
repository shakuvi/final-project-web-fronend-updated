import { Avatar, Grid, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import React from "react";
import TopBarButton from "../../../components/common/TopBarButton";

export default function HomeHeaderWithUserDetails({
  label,
  buttonName,
  isEditVisible,
  handleClickOpen,
}) {
  return (
    <Grid container alignItems="center" pl={1} pt={1}>
      <Grid item xs={6}>
        <Typography sx={{ color: "#FD5C25" }}>{label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item pr={2}>
            {isEditVisible ? (
              <TopBarButton
                handleClickOpen={() =>
                  handleClickOpen({
                    userName: "",
                    mobileNumber: "",
                    email: "",
                    password: "",
                    dateOfBirth: "",
                  })
                }
                buttonName={buttonName}
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={1}>
            <CircleNotificationsIcon fontSize="large" />
          </Grid>
          <Grid item xs={1}>
            <Avatar>R</Avatar>
          </Grid>
          <Grid item xs={2}>
            <Typography>Radika</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
