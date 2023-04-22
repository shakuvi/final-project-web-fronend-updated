import { Grid } from "@mui/material";
import React from "react";
import OrderStatusButton from "../../../../components/order/OrderStatusButton";
import { useSelector } from "react-redux";

export default function OrderDineIn() {
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
            color="#0A2B7D"
            name="Served"
            isActive={userSelectedOrder.status === "Served"}
            handleStatusClick={handleStatusClick}
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#DAFFAA"
            color="#216708"
            name="Completed"
            isActive={userSelectedOrder.status === "Completed"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
