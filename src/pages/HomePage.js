import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import HomeLayout from "../layouts/home/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCatergories } from "../store/actions/categoryAction";

export default function HomePage() {
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.employeeReducer);
  useEffect(() => {
    dispatch(getAllCatergories(token));
  }, [dispatch, token]);
  return (
    <div>
      <CommonLayout>
        <HomeLayout />
      </CommonLayout>
    </div>
  );
}
