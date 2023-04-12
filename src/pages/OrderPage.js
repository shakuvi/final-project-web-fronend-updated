import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import OrderLayout from "../layouts/order/OrderLayout";

export default function OrderPage() {
  return (
    <div>
      <CommonLayout>
        <OrderLayout />
      </CommonLayout>
    </div>
  );
}
