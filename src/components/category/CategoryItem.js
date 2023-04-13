import React from "react";

export default function CategoryItem() {
  return (
    <div
      style={{
        height: "175px",
        width: "175px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "125px",
          height: "125px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 2px #FE6329",
          borderRadius: 20,
        }}
      >
        <img
          alt=""
          width="100px"
          src="https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg?w=2000"
        />
      </div>
    </div>
  );
}
