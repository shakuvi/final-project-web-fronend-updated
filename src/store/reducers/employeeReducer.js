import * as Actions from "../actions/employeeAction";

const inisialState = {
  getAllEmployeeListLoading: "notStarted",
  allEmployeeList: [],
  userSelectedEmployee: {},
  employeeUpdateLoadingStatus: "notStarted",
  employeeCreteLoadingStatus: "notStarted",
  employeeLoginLoadingStatus: "notStarted",
  token: "",
  employee: {},
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

    case Actions.SET_USER_SELECTED_EMPLOYEE:
      return { ...state, userSelectedEmployee: action.payload };

    case Actions.UPDATE_EMPLOYEE_SUCCESS:
      return { ...state, employeeUpdateLoadingStatus: "completed" };

    case Actions.CLEAR_UPDATE_EMPLOYEE_LOADING_STATUS:
      return { ...state, employeeUpdateLoadingStatus: "notStarted" };

    case Actions.CREATE_EMPLOYEE_SUCCESS:
      return { ...state, employeeCreteLoadingStatus: "completed" };

    case Actions.CLEAR_CREATE_EMPLOYEE_LOADING_STATUS:
      return { ...state, employeeCreteLoadingStatus: "notStarted" };

    case Actions.EMPOLYEE_LOGIN_START:
      return { ...state, employeeLoginLoadingStatus: "loading" };

    case Actions.EMPOLYEE_LOGIN_SUCCESS:
      return {
        ...state,
        employeeLoginLoadingStatus: "sucess",
        token: action.payload.token,
        employee: action.payload.employee,
      };

    case Actions.EMPOLYEE_LOGIN_FAIL:
      return { ...state, employeeLoginLoadingStatus: "fail" };

    default:
      return state;
  }
};

export default employeeReducer;
