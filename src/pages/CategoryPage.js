import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import CatergoryLayout from "../layouts/catergory/CatergoryLayout";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  const { getAllCatergoryListLoading: loadingStatus, allCatergoryList } =
    useSelector((store) => store.catergoryReducer);
  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div>Loading</div>
        ) : loadingStatus === "sucess" ? (
          allCatergoryList.length > 0 ? (
            <CatergoryLayout info={allCatergoryList} />
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
