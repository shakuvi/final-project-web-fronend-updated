import { combineReducers } from "redux";
import catergoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  catergoryReducer,
  orderReducer,
  employeeReducer,
});

export default rootReducer;
