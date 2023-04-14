import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import TopBarButton from "../../components/common/TopBarButton";

export default function FoodLayout() {
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails
        info={{ label: "Food" }}
        isEditVisible={<TopBarButton />}
      />
    </div>
  );
}
