import * as Actions from "../actions/categoryAction";

const inisialState = {
  getAllCatergoryListLoading: "notStarted",
  allCatergoryList: [],
};

const catergoryReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_CATEGORIES_LOADING:
      return { ...state, getAllCatergoryListLoading: "loading" };

    case Actions.GET_ALL_CATEGORIES_SUCESS:
      return {
        ...state,
        getAllCatergoryListLoading: "sucess",
        allCatergoryList: action.payload,
      };

    case Actions.GET_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        getAllCatergoryListLoading: "fail",
        allCatergoryList: [],
      };

    default:
      return state;
  }
};

export default catergoryReducer;
