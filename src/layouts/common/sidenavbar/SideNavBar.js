import React from "react";
import Logo from "../../../components/common/Logo";
import NavButton from "../../../components/common/sidenavbar/NavButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { NavLink } from "react-router-dom";

const buttons = [
  { title: "Home", route: "home", image: <HomeIcon /> },
  { title: "Order", route: "order", image: <ShoppingCartCheckoutIcon /> },
  { title: "Reviews", route: "review", image: <ReviewsIcon /> },
];

export default function SideNavBar() {
  return (
    <div>
      <Logo />
      <div>
        {buttons.map((val, key) => {
          return (
            <div key={key} style={{ padding: 5 }}>
              <NavLink style={{ textDecoration: "none" }} to={`/${val.route}`}>
                <NavButton info={val} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
