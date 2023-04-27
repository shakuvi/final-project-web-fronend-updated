import { combineReducers } from "redux";
import catergoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import employeeReducer from "./employeeReducer";
import orderItemReducer from "./orderItemReducer";
import feedbackReducer from "./feedbackReducer";

const rootReducer = combineReducers({
  catergoryReducer,
  orderReducer,
  employeeReducer,
  orderItemReducer,
  feedbackReducer,
});

export default rootReducer;
