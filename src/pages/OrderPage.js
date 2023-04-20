import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import OrderLayout from "../layouts/order/OrderLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../store/actions/orderAction";

export default function OrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { getAllOrderListLoading: loadingStatus, allOrderList } = useSelector(
    (store) => store.orderReducer
  );

  console.log(allOrderList);

  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div>Loading</div>
        ) : loadingStatus === "sucess" ? (
          allOrderList.length > 0 ? (
            <OrderLayout info={allOrderList} />
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
