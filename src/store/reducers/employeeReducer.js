import * as Actions from "../actions/employeeAction";

const inisialState = {
  getAllEmployeeListLoading: "notStarted",
  allEmployeeList: [],
};

const employeeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_EMPLOYEES_LOADING:
      return { ...state, getAllEmployeeListLoading: "loading" };

    case Actions.GET_ALL_EMPLOYEES_SUCESS:
      return {
        ...state,
        getAllEmployeeListLoading: "sucess",
        allEmployeeList: action.payload,
      };

    case Actions.GET_ALL_EMPLOYEES_FAIL:
      return {
        ...state,
        getAllEmployeeListLoading: "fail",
        allEmployeeList: [],
      };

    default:
      return state;
  }
};

export default employeeReducer;
