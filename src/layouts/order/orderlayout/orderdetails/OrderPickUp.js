import { Grid } from "@mui/material";
import React from "react";
import OrderStatusButton from "../../../../components/order/OrderStatusButton";

export default function OrderPickUp() {
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
            isActive
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#B1D0FF"
            color="#081D67"
            name="Ready"
            isActive
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#DAFFAA"
            color="#216708"
            name="Completed"
            isActive
          />
        </Grid>
      </Grid>
    </div>
  );
}
