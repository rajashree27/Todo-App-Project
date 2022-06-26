import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducerTodo} from "../redux/todos/reducerTodo"
import {reducerAuth} from "./auth/reducerAuth"

const rootReducer = combineReducers({
    auth:reducerAuth,
    todoReducer:reducerTodo
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;