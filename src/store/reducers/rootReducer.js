import { combineReducers } from "redux";
import catergoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  catergoryReducer,
  orderReducer,
});

export default rootReducer;
