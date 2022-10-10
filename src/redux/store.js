import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter.reducer";
import {composeWithDevTools} from "redux-devtools-extension"



const rootReducer = combineReducers({
    counter : counterReducer
})

const store = createStore(rootReducer,{},composeWithDevTools());

export default store;