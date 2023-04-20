import * as Actions from "../actions/orderAction";

const inisialState = {
  getAllOrderListLoading: "notStarted",
  allOrderList: [],
};

const orderReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_ORDERS_LOADING:
      return { ...state, getAllOrderListLoading: "loading" };

    case Actions.GET_ALL_ORDERS_SUCESS:
      return {
        ...state,
        getAllOrderListLoading: "sucess",
        allCatergoryList: action.payload,
      };

    case Actions.GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        getAllOrderListLoading: "fail",
        allCatergoryList: [],
      };

    default:
      return state;
  }
};

export default orderReducer;
