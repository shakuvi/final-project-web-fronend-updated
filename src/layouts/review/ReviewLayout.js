import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import { Grid } from "@mui/material";
import ReviewCard from "./reviewlayout/ReviewCard";
import { useSelector } from "react-redux";

export default function ReviewLayout() {
  const { allFeedbackList } = useSelector((store) => store.feedbackReducer);
  return (
    <div
      style={{
        backgroundColor: "#FFF2F2",
        height: "100vh",
        textAlign: "left",
        paddingLeft: 30,
      }}
    >
      <HomeHeaderWithUserDetails label="Review" />
      <Grid container pt={5} justifyContent="left">
        {allFeedbackList.map((val, key) => {
          return (
            <Grid item xs={5} pb={2} key={key}>
              <ReviewCard val={val} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
