import * as Actions from "../actions/orderAction";

const inisialState = {
  getAllOrderListLoading: "notStarted",
  allOrderList: [],
  userSelectedOrder: {},
};

const orderReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_ORDERS_LOADING:
      return { ...state, getAllOrderListLoading: "loading" };

    case Actions.GET_ALL_ORDERS_SUCESS:
      return {
        ...state,
        getAllOrderListLoading: "sucess",
        allOrderList: action.payload,
      };

    case Actions.GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        getAllOrderListLoading: "fail",
        allOrderList: [],
      };

    case Actions.SET_USER_SELECTED_ORDER:
      return { ...state, userSelectedOrder: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
