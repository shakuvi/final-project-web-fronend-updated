import axios from "axios";

export const GET_ALL_ORDERS_LOADING = "GET_ALL_ORDERS_LOADING";
export const GET_ALL_ORDERS_SUCESS = "GET_ALL_ORDERS_SUCESS";
export const GET_ALL_ORDERS_FAIL = "GET_ALL_ORDERS_FAIL";

export const getAllOrders = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERS_LOADING });
    axios
      .get("http://localhost:5000/order/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_ORDERS_SUCESS,
          payload: response.data.order,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_ORDERS_FAIL });
      });
  };
};
