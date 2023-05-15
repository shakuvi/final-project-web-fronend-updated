import { combineReducers } from "redux";
import catergoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import employeeReducer from "./employeeReducer";
import orderItemReducer from "./orderItemReducer";
import feedbackReducer from "./feedbackReducer";
import foodReducer from "./foodReducer";
import employeeTypeReducer from "./employeeTypeReducer";

const rootReducer = combineReducers({
  catergoryReducer,
  orderReducer,
  employeeReducer,
  orderItemReducer,
  feedbackReducer,
  foodReducer,
  employeeTypeReducer,
});

export default rootReducer;
