import React from "react";
import HomeOverview from "./homelayout/HomeOverview";
import HomeCategory from "./homelayout/HomeCategory";
import HomePopularThisWeek from "./homelayout/HomePopularThisWeek";
import HomeRecentReviews from "./homelayout/HomeRecentReviews";

export default function HomeLayout() {
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeOverview />
      <HomeCategory />
      <HomePopularThisWeek />
      <HomeRecentReviews />
    </div>
  );
}
