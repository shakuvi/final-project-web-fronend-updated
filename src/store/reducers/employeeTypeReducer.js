import * as Actions from "../actions/employeeTypeAction";

const inisialState = {
  getAllEmployeeTypesLoading: "notStarted",
  allEmployeeTypes: [],
};

const employeeTypeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_EMPLYEE_TYPES_LOADING:
      return { ...state, getAllEmployeeTypesLoading: "loading" };

    case Actions.GET_ALL_EMPLYEE_TYPES_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllEmployeeTypesLoading: "sucess",
        allEmployeeTypes: action.payload,
      };

    case Actions.GET_ALL_EMPLYEE_TYPES_FAIL:
      return {
        ...state,
        getAllEmployeeTypesLoading: "fail",
        allEmployeeTypes: [],
      };

    default:
      return state;
  }
};

export default employeeTypeReducer;
