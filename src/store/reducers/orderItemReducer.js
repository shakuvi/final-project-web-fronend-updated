import * as Actions from "../actions/orderItemAction";

const inisialState = {
  getAllOrderByIdLoading: "notStarted",
  allOrdersById: [],
};

const orderItemReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_ORDERS_BY_ID_LOADING:
      return { ...state, getAllOrderByIdLoading: "loading" };

    case Actions.GET_ALL_ORDERS_BY_ID_SUCESS:
      return {
        ...state,
        getAllOrderByIdLoading: "sucess",
        allOrdersById: action.payload,
      };

    case Actions.GET_ALL_ORDERS_BY_ID_FAIL:
      return {
        ...state,
        getAllOrderByIdLoading: "fail",
        allOrdersById: [],
      };

    default:
      return state;
  }
};

export default orderItemReducer;
