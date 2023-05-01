import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import { useDispatch, useSelector } from "react-redux";
import OrderDineIn from "./orderdetails/OrderDineIn";
import OrderPickUp from "./orderdetails/OrderPickUp";
import { updateOrderStatus } from "../../../store/actions/orderAction";

export default function OrderDetails({ allOrdersById }) {
  console.log(allOrdersById);
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

  const { getAllOrderByIdLoading } = useSelector(
    (store) => store.orderItemReducer
  );

  console.log(getAllOrderByIdLoading);

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
        pb={4}
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
          width: "70%",
        }}
      >
        <Grid item xs={4}>
          <b>Food</b>
        </Grid>
        <Grid item xs={4}>
          <b>Quantity</b>
        </Grid>
        <Grid item xs={4}>
          <b>Total</b>
        </Grid>
      </Grid>
      {allOrdersById.map((val, key) => {
        return (
          <Grid
            container
            justifyContent="space-between"
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
            }}
            key={key}
          >
            <Grid item xs={4} textAlign="left">
              {val.food.name}
            </Grid>
            <Grid item xs={4}>
              {val.quantity}
            </Grid>
            <Grid item xs={4}>
              {val.quantity * val.price}
            </Grid>
          </Grid>
        );
      })}
      <div style={{ paddingTop: 40 }}>
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
    </div>
  );
}
