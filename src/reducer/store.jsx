import { combineReducers, createStore } from "redux";
import charactersReducer from "./charactersReducer";

const reducers = combineReducers({
    charactersPage: charactersReducer
});

const store = createStore(reducers);

export default store;