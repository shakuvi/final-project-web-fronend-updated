import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/user/UserLayout";
import {
  clearEmployeeLoadingStatus,
  getAllEmployees,
} from "../store/actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";

export default function UserPage() {
  const dispatch = useDispatch();

  const {
    getAllEmployeeListLoading: loadingStatus,
    allEmployeeList,
    employeeUpdateLoadingStatus,
    employeeCreteLoadingStatus,
  } = useSelector((store) => store.employeeReducer);

  const handleClearLoadingStatus = () => {
    dispatch(clearEmployeeLoadingStatus());
  };

  useEffect(() => {
    console.log(employeeUpdateLoadingStatus);
    console.log(employeeCreteLoadingStatus);
    if (
      employeeUpdateLoadingStatus === "completed" ||
      employeeCreteLoadingStatus === "completed"
    ) {
      console.log(employeeUpdateLoadingStatus);
      console.log(employeeCreteLoadingStatus);
      dispatch(getAllEmployees());
    }
  }, [dispatch, employeeUpdateLoadingStatus, employeeCreteLoadingStatus]);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  console.log(allEmployeeList);
  return (
    <div>
      <CommonLayout>
        {loadingStatus === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Circles
                height="120"
                width="120"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          </div>
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
