import axios from "axios";

export const GET_ALL_EMPLOYEES_LOADING = "GET_ALL_EMPLOYEES_LOADING";
export const GET_ALL_EMPLOYEES_SUCESS = "GET_ALL_EMPLOYEES_SUCESS";
export const GET_ALL_EMPLOYEES_FAIL = "GET_ALL_EMPLOYEES_FAIL";

export const SET_USER_SELECTED_EMPLOYEE = "SET_USER_SELECTED_EMPLOYEE";

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
