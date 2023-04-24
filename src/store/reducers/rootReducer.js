import { combineReducers } from "redux";
import catergoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import employeeReducer from "./employeeReducer";
import orderItemReducer from "./orderItemReducer";

const rootReducer = combineReducers({
  catergoryReducer,
  orderReducer,
  employeeReducer,
  orderItemReducer
});

export default rootReducer;
