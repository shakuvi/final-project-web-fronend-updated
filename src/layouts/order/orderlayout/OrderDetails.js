import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import { useDispatch, useSelector } from "react-redux";
import OrderDineIn from "./orderdetails/OrderDineIn";
import OrderPickUp from "./orderdetails/OrderPickUp";
import { updateOrderStatus } from "../../../store/actions/orderAction";

export default function OrderDetails() {
  const { userSelectedOrder } = useSelector((store) => store.orderReducer);
  const [orderStatus, setOrderStatus] = React.useState(
    userSelectedOrder.status
  );

  const dispatch = useDispatch();

  const handleOrderStatusChanage = (currentStatus) => {
    setOrderStatus(currentStatus);
  };

  const handleSave = () => {
    if (userSelectedOrder !== orderStatus) {
      dispatch(updateOrderStatus(userSelectedOrder._id, orderStatus));
    }
  };

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
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
        pt={2}
        pb={2}
      >
        <Grid item>Food Item</Grid>
        <Grid item>Quantity</Grid>
        <Grid item>Price</Grid>
      </Grid>
      {userSelectedOrder.orderType.orderType === "dinein" ? (
        <OrderDineIn
          orderStatus={orderStatus}
          handleSelect={handleOrderStatusChanage}
        />
      ) : userSelectedOrder.orderType.orderType === "pickup" ? (
        <OrderPickUp
          orderStatus={orderStatus}
          handleSelect={handleOrderStatusChanage}
        />
      ) : (
        ""
      )}
      <PopUpDialogActionButton handleClick={handleSave} />
    </div>
  );
}
