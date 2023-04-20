import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import OrderStatusButton from "../../../components/order/OrderStatusButton";

export default function OrderDetails() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography>Order Details</Typography>
      <Divider />
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
        pt={2}
      >
        <Grid item>Name</Grid>
        <Grid item>Date</Grid>
        <Grid item>Time</Grid>
        <Grid item>ordertype</Grid>
        <Grid item>Table number</Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
        pt={2}
        pb={2}
      >
        <Grid item xs={6}>
          Food Item
        </Grid>
        <Grid item xs={6}>
          Price
        </Grid>
        <Grid item xs={6}>
          Food Item
        </Grid>
        <Grid item xs={6}>
          Price
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
      >
        <Grid item>
          <OrderStatusButton
            backgroundColor="#FBCAFF"
            color="#216708"
            name="Pending"
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#B1D0FF"
            color="#0A2B7D"
            name="Delivered"
          />
        </Grid>
        <Grid item>
          <OrderStatusButton
            backgroundColor="#DAFFAA"
            color="#216708"
            name="Completed"
          />
        </Grid>
      </Grid>
      <PopUpDialogActionButton />
    </div>
  );
}
