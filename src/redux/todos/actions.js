import * as actions from "./actionTypes";
import axios from "axios";

// Getting todo list
export const getTodoList = () => (dispatch) => {
	dispatch({ type: actions.GET_TODO_REQUEST });

	axios
		.get("/todos")
		.then((r) => dispatch({ type: actions.GET_TODO_SUCCESS, payload: r.data }))
		.catch((e) => dispatch({ type: actions.GET_TODO_FAILURE }));
};

// Add todo
export const addTodo = (payload) => (dispatch) => {
	dispatch({ type: actions.ADD_TODO_LOADING });

	axios
		.post("/todos",payload)
		.then((r) => dispatch({ type: actions.ADD_TODO_SUCCESS, payload: r.data }))
		.catch((e) => dispatch({ type: actions.ADD_TODO_FAILURE }));
};



