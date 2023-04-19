import * as Actions from "../actions/categoryAction";

const inisialState = {
  getAllCatergoryListLoading: "notStarted",
  allCatergoryList: [],
  userSelectedCatergory: {},
  catergoryUpdateLoadingStatus: "notStarted",
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

    case Actions.SET_USER_SELECTED_CATERGORY:
      return { ...state, userSelectedCatergory: action.payload };

    case Actions.UPDATE_CATERGORY_SUCCESS:
      return { ...state, catergoryUpdateLoadingStatus: "completed" };

    case Actions.CLEAR_UPDATE_CATERGORY_LOADING_STATUS:
      return { ...state, catergoryUpdateLoadingStatus: "notStarted" };

    default:
      return state;
  }
};

export default catergoryReducer;
