import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/user/UserLayout";
import { getAllEmployees } from "../store/actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";

export default function UserPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const { getAllEmployeeListLoading: loadingStatus, allEmployeeList } =
    useSelector((store) => store.employeeReducer);

  console.log(allEmployeeList);
  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div>Loading</div>
        ) : loadingStatus === "sucess" ? (
          allEmployeeList.length > 0 ? (
            <UserLayout info={allEmployeeList} />
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
