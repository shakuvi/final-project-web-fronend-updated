import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import OrderStatusButton from "../../../components/order/OrderStatusButton";
import { useSelector } from "react-redux";

export default function OrderDetails() {
  const { userSelectedOrder } = useSelector((store) => store.orderReducer);
  console.log(userSelectedOrder);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography sx={{ color: "#FD5C25", fontSize: 30 }}>
        Order Details
      </Typography>
      <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}>
        <Divider />
      </div>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
        pt={2}
      >
        <Grid item>{userSelectedOrder.orderedBy.userName}</Grid>
        <Grid item>{userSelectedOrder.createDate}</Grid>
        <Grid item>{userSelectedOrder.createTime}</Grid>
        <Grid item>{userSelectedOrder.orderType.orderType}</Grid>
        {userSelectedOrder.orderType.orderType === "dinein" ? (
          <Grid item>{userSelectedOrder.table.tableName}</Grid>
        ) : null}
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginLeft: "auto", marginRight: "auto", width: "60%" }}
        pt={2}
        pb={2}
      >
        <Grid item xs={4}>
          Food Item
        </Grid>
        <Grid item xs={4}>
          Quantity
        </Grid>
        <Grid item xs={4}>
          Price
        </Grid>
        <Grid item xs={4}>
          Food Item
        </Grid>
        <Grid item xs={4}>
          Quantity
        </Grid>
        <Grid item xs={4}>
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
            color="#91109C"
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
