import React from "react";
import Logo from "../../../components/common/Logo";
import NavButton from "../../../components/common/sidenavbar/NavButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import GroupIcon from "@mui/icons-material/Group";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { NavLink } from "react-router-dom";
import LogOutButton from "../../../components/common/sidenavbar/LogOutButton";
import { useSelector } from "react-redux";

// const buttons = [
//   { title: "Home", route: "home", image: <HomeIcon /> },
//   { title: "Order", route: "order", image: <ShoppingCartCheckoutIcon /> },
//   { title: "Reviews", route: "review", image: <ReviewsIcon /> },
//   { title: "Users", route: "user", image: <GroupIcon /> },
//   { title: "Food Catergory", route: "catergory", image: <RestaurantIcon /> },
// ];

export default function SideNavBar() {
  const { employee } = useSelector((store) => store.employeeReducer);

  const buttons =
    employee.employeeType === "owner"
      ? [
          { title: "Home", route: "home", image: <HomeIcon /> },
          {
            title: "Order",
            route: "order",
            image: <ShoppingCartCheckoutIcon />,
          },
          { title: "Reviews", route: "review", image: <ReviewsIcon /> },
          { title: "Users", route: "user", image: <GroupIcon /> },
          {
            title: "Food Category",
            route: "catergory",
            image: <RestaurantIcon />,
          },
        ]
      : [
          // Buttons for non-owner employees
          {
            title: "Order",
            route: "order",
            image: <ShoppingCartCheckoutIcon />,
          },
          { title: "Reviews", route: "review", image: <ReviewsIcon /> },
        ];

  return (
    <div>
      <div style={{ paddingTop: 10 }}>
        <Logo />
      </div>
      <div style={{ paddingTop: 40, paddingBottom: 190 }}>
        {buttons.map((val, key) => {
          return (
            <div key={key} style={{ padding: 5 }}>
              <NavLink style={{ textDecoration: "none" }} to={`/${val.route}`}>
                {({ isActive, isPending }) => (
                  <NavButton title={val.title} isActive={isActive} />
                )}
              </NavLink>
            </div>
          );
        })}
      </div>
      <LogOutButton />
    </div>
  );
}
