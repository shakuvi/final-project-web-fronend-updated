import React from "react";
import HomeOverview from "./homelayout/HomeOverview";
import HomeCategory from "./homelayout/HomeCategory";
import HomePopularThisWeek from "./homelayout/HomePopularThisWeek";
import HomeRecentReviews from "./homelayout/HomeRecentReviews";
import { useSelector } from "react-redux";
import LoadingComponet from "../../components/common/LoadingComponet";

export default function HomeLayout() {
  const { getAllCatergoryListLoading: loadingStatus, allCatergoryList } =
    useSelector((store) => store.catergoryReducer);
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeOverview />
      {loadingStatus === "loading" ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingComponet />
        </div>
      ) : loadingStatus === "sucess" ? (
        allCatergoryList.length > 0 ? (
          <HomeCategory info={allCatergoryList} />
        ) : (
          <div>No data</div>
        )
      ) : loadingStatus === "fail" ? (
        <div>Fail</div>
      ) : (
        ""
      )}

      <HomePopularThisWeek />
      <HomeRecentReviews />
    </div>
  );
}
