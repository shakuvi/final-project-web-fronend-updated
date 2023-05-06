import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import OrderLayout from "../layouts/order/OrderLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  setUserSelectedOrder,
} from "../store/actions/orderAction";
import { getAllOrdersByOrderId } from "../store/actions/orderItemAction";
import LoadingComponet from "../components/common/LoadingComponet";

export default function OrderPage() {
  const dispatch = useDispatch();

  const { orderUpdateLoadingStatus } = useSelector(
    (store) => store.orderReducer
  );

  useEffect(() => {
    console.log(orderUpdateLoadingStatus);
    if (orderUpdateLoadingStatus === "completed") {
      console.log(orderUpdateLoadingStatus);
      dispatch(getAllOrders());
    }
  }, [dispatch, orderUpdateLoadingStatus]);

  useEffect(() => {
    if (allOrderList.length === 0) {
      dispatch(getAllOrders());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleorderdata = (order) => {
    console.log(order);
    dispatch(setUserSelectedOrder(order));
    dispatch(getAllOrdersByOrderId(order._id));
  };

  const { getAllOrderByIdLoading, allOrdersById } = useSelector(
    (store) => store.orderItemReducer
  );

  const { getAllOrderListLoading: loadingStatus, allOrderList } = useSelector(
    (store) => store.orderReducer
  );

  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "95vh",
            }}
          >
            <LoadingComponet />
          </div>
        ) : loadingStatus === "sucess" ? (
          allOrderList.length > 0 ? (
            <OrderLayout
              info={allOrderList}
              handleorderdata={handleorderdata}
              allOrdersById={allOrdersById}
              getAllOrderByIdLoading={getAllOrderByIdLoading}
            />
          ) : (
            <div>No data</div>
          )
        ) : loadingStatus === "fail" ? (
          <div>Fail</div>
        ) : (
          ""
        )}
      </CommonLayout>
    </div>
  );
}
