import axios from "axios";

export const GET_ALL_EMPLYEE_TYPES_LOADING = "GET_ALL_EMPLYEE_TYPES_LOADING";
export const GET_ALL_EMPLYEE_TYPES_SUCESS = "GET_ALL_EMPLYEE_TYPES_SUCESS";
export const GET_ALL_EMPLYEE_TYPES_FAIL = "GET_ALL_EMPLYEE_TYPES_FAIL";

export const getAllEmployeeTypes = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_EMPLYEE_TYPES_LOADING });
    axios
      .get("https://plymouthfinal.live:5000/emptype/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_EMPLYEE_TYPES_SUCESS,
          payload: response.data.employeetype,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_EMPLYEE_TYPES_FAIL });
      });
  };
};
