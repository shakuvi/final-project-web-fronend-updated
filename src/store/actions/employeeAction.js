import axios from "axios";

export const GET_ALL_EMPLOYEES_LOADING = "GET_ALL_EMPLOYEES_LOADING";
export const GET_ALL_EMPLOYEES_SUCESS = "GET_ALL_EMPLOYEES_SUCESS";
export const GET_ALL_EMPLOYEES_FAIL = "GET_ALL_EMPLOYEES_FAIL";

export const SET_USER_SELECTED_EMPLOYEE = "SET_USER_SELECTED_EMPLOYEE";

export const UPDATE_EMPLOYEE_START = "UPDATE_EMPLOYEE_START";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAIL = "UPDATE_EMPLOYEE_FAIL";

export const CLEAR_UPDATE_EMPLOYEE_LOADING_STATUS =
  "CLEAR_UPDATE_EMPLOYEE_LOADING_STATUS";

export const getAllEmployees = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_EMPLOYEES_LOADING });
    axios
      .get("https://nsbmproject.radikadilanka.com:5000/employee/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_EMPLOYEES_SUCESS,
          payload: response.data.employee,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_EMPLOYEES_FAIL });
      });
  };
};

export const setUserSelectedEmployee = (employee) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_EMPLOYEE, payload: employee });
  };
};

export const updateEmployee = (employee) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_EMPLOYEE_START });
    axios
      .post("http://localhost:5000/employee/update", {
        employee,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_EMPLOYEE_SUCCESS,
          payload: response.data.employee,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_EMPLOYEE_FAIL });
      });
  };
};

export const clearEmployeeLoadingStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_UPDATE_EMPLOYEE_LOADING_STATUS });
  };
};
