import { Grid } from "@mui/material";
import React from "react";
import OrderStatusButton from "../../../../components/order/OrderStatusButton";
import { useSelector } from "react-redux";

export default function OrderPickUp() {
  const { userSelectedOrder } = useSelector((store) => store.orderReducer);
  const handleStatusClick = () => {
    console.log("work");
  };
  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
      >
        <Grid item>
          <OrderStatusButton
            backgroundColor="#FBCAFF"
            color="#91109C"
            name="Pending"
            isActive={userSelectedOrder.status === "Pending"}
            handleStatusClick={handleStatusClick}
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#B1D0FF"
            color="#081D67"
            name="Ready"
            isActive={userSelectedOrder.status === "Ready"}
            handleStatusClick={handleStatusClick}
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#DAFFAA"
            color="#216708"
            name="Completed"
            isActive={userSelectedOrder.status === "Completed"}
            handleStatusClick={handleStatusClick}
          />
        </Grid>
      </Grid>
    </div>
  );
}
