import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/user/UserLayout";
import {
  clearEmployeeLoadingStatus,
  getAllEmployees,
} from "../store/actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";

export default function UserPage() {
  const dispatch = useDispatch();

  const { employeeUpdateLoadingStatus } = useSelector(
    (store) => store.employeeReducer
  );

  const { getAllEmployeeListLoading: loadingStatus, allEmployeeList } =
    useSelector((store) => store.employeeReducer);

  const handleClearLoadingStatus = () => {
    dispatch(clearEmployeeLoadingStatus());
  };

  useEffect(() => {
    console.log(employeeUpdateLoadingStatus);
    if (employeeUpdateLoadingStatus === "completed") {
      console.log(employeeUpdateLoadingStatus);
      dispatch(getAllEmployees());
    }
  }, [dispatch, employeeUpdateLoadingStatus]);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  console.log(allEmployeeList);
  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div>Loading</div>
        ) : loadingStatus === "sucess" ? (
          allEmployeeList.length > 0 ? (
            <UserLayout
              info={allEmployeeList}
              handleClearLoadingStatus={handleClearLoadingStatus}
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
