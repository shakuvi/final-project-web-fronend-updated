import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import FoodLayout from "../layouts/food/FoodLayout";
import { useSelector } from "react-redux";

export default function FoodPage() {
  const { allCatergoryList } = useSelector((store) => store.catergoryReducer);
  return (
    <div>
      <CommonLayout>
        <FoodLayout allCatergoryList={allCatergoryList} />
      </CommonLayout>
    </div>
  );
}
