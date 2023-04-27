import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import CatergoryLayout from "../layouts/catergory/CatergoryLayout";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  const { allCatergoryList } = useSelector((store) => store.catergoryReducer);
  console.log(allCatergoryList);
  return (
    <div>
      <CommonLayout>
        <CatergoryLayout info={allCatergoryList} />
      </CommonLayout>
    </div>
  );
}
