import * as Actions from "../actions/foodAction";

const inisialState = {
  getAllFoodsLoading: "notStarted",
  allFoodList: [],
  employeeSelectedFood: {},
};

const foodReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_FOOD_ITEMS_LOADING:
      return { ...state, getAllFoodsLoading: "loading" };

    case Actions.GET_ALL_FOOD_ITEMS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllFoodsLoading: "sucess",
        allFoodList: action.payload,
      };

    case Actions.GET_ALL_FOOD_ITEMS_FAIL:
      return {
        ...state,
        getAllFoodsLoading: "fail",
        allFoodList: [],
      };

    case Actions.SET_EMPLOYEE_SELECTED_FOOD:
      return { ...state, employeeSelectedFood: action.payload };

    default:
      return state;
  }
};

export default foodReducer;
