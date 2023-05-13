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

export const CLEAR_CREATE_EMPLOYEE_LOADING_STATUS =
  "CLEAR_CREATE_EMPLOYEE_LOADING_STATUS";

export const CREATE_EMPLOYEE_START = "CREATE_EMPLOYEE_START";
export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL";

export const EMPOLYEE_LOGIN_START = "EMPOLYEE_LOGIN_START";
export const EMPOLYEE_LOGIN_SUCCESS = "EMPOLYEE_LOGIN_SUCCESS";
export const EMPOLYEE_LOGIN_FAIL = "EMPOLYEE_LOGIN_FAIL";

export const getAllEmployees = (token) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_EMPLOYEES_LOADING });
    axios
      .get("https://nsbmproject.radikadilanka.com:5000/employee/get-all", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
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

export const updateEmployee = (employee, token) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_EMPLOYEE_START });
    axios
      .post(
        "http://localhost:5000/employee/update",
        {
          employee,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
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

export const createEmployee = (employee, token) => {
  return (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE_START });
    axios
      .post(
        "http://localhost:5000/employee/create",
        {
          employee,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: CREATE_EMPLOYEE_SUCCESS,
          payload: response.data.employee,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: CREATE_EMPLOYEE_FAIL });
      });
  };
};

export const clearCreateEmployeeLoadingStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_CREATE_EMPLOYEE_LOADING_STATUS });
  };
};

export const employeeLogin = (email, password) => {
  return (dispatch) => {
    dispatch({ type: EMPOLYEE_LOGIN_START });
    axios
      .post("http://localhost:5000/employee/sign-in", { email, password })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: EMPOLYEE_LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: EMPOLYEE_LOGIN_FAIL,
          payload: e.response.data.message,
        });
      });
  };
};
