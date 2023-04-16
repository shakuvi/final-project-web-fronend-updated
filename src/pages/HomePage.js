import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import HomeLayout from "../layouts/home/HomeLayout";
import { useDispatch } from "react-redux";
import { getAllCatergories } from "../store/actions/categoryAction";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCatergories());
  }, [dispatch]);
  return (
    <div>
      <CommonLayout>
        <HomeLayout />
      </CommonLayout>
    </div>
  );
}
