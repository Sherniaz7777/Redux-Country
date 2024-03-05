import { applyMiddleware, createStore } from "redux";
import countryReducer from "./slice/countrySlice";
import { thunk } from "redux-thunk";


const store = createStore(countryReducer, applyMiddleware(thunk));
export default store;