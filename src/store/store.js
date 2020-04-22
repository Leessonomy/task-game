import defaultReducer from "./reducers/reducer";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  game: defaultReducer,
});


const store = createStore(reducer);

export default store;