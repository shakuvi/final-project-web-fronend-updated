import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import OrderLayout from "../layouts/order/OrderLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  setUserSelectedOrder,
} from "../store/actions/orderAction";

export default function OrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleorderdata = (order) => {
    console.log(order);
    dispatch(setUserSelectedOrder(order));
  };

  const { getAllOrderListLoading: loadingStatus, allOrderList } = useSelector(
    (store) => store.orderReducer
  );

  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div>Loading</div>
        ) : loadingStatus === "sucess" ? (
          allOrderList.length > 0 ? (
            <OrderLayout
              info={allOrderList}
              handleorderdata={handleorderdata}
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
