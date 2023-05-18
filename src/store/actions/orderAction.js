import axios from "axios";

export const GET_ALL_ORDERS_LOADING = "GET_ALL_ORDERS_LOADING";
export const GET_ALL_ORDERS_SUCESS = "GET_ALL_ORDERS_SUCESS";
export const GET_ALL_ORDERS_FAIL = "GET_ALL_ORDERS_FAIL";

export const SET_USER_SELECTED_ORDER = "SET_USER_SELECTED_ORDER";

export const UPDATE_ORDER_STATUS_LOADING = "UPDATE_ORDER_STATUS_LOADING";
export const UPDATE_ORDER_STATUS_SUCESS = "UPDATE_ORDER_STATUS_SUCESS";
export const UPDATE_ORDER_STATUS_FAIL = "UPDATE_ORDER_STATUS_FAIL";

export const getAllOrders = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERS_LOADING });
    axios
      .get("https://plymouthfinal.live:5000/order/get-all")
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

export const updateOrderStatus = (id, status) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS_LOADING });
    axios
      .post("https://plymouthfinal.live:5000/order/update", {
        id,
        status,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_ORDER_STATUS_SUCESS,
          payload: response.data.order,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_ORDER_STATUS_FAIL });
      });
  };
};

export const setUserSelectedOrder = (order) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_ORDER, payload: order });
  };
};
