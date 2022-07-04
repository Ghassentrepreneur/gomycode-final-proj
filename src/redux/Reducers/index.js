import { combineReducers } from "redux";
import { honeyReducer } from "./Reducer";
import { contactReducer } from "./contactReducer";

export const rootReducer = combineReducers({
  honeyReducer,contactReducer
});
