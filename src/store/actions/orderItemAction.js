import axios from "axios";

export const GET_ALL_ORDERS_BY_ID_LOADING = "GET_ALL_ORDERS_BY_ID_LOADING";
export const GET_ALL_ORDERS_BY_ID_SUCESS = "GET_ALL_ORDERS_BY_ID_SUCESS";
export const GET_ALL_ORDERS_BY_ID_FAIL = "GET_ALL_ORDERS_BY_ID_FAIL";

export const getAllOrdersByOrderId = (orderId) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERS_BY_ID_LOADING });
    axios
      .post("https://plymouthfinal.live:5000/orderitems/get-all-by-order-id", {
        orderId,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_ORDERS_BY_ID_SUCESS,
          payload: response.data.orderitemwithquantity,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_ORDERS_BY_ID_FAIL });
      });
  };
};
