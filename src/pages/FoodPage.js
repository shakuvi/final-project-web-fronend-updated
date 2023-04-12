import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import FoodLayout from "../layouts/food/FoodLayout";

export default function FoodPage() {
  return (
    <div>
      <CommonLayout>
        <FoodLayout />
      </CommonLayout>
    </div>
  );
}
