import axios from "axios";
import {
	GET_TODO_FAILURE,
	GET_TODO_REQUEST,
	GET_TODO_SUCCESS,
	TODO_ADD,
	TODO_DELETE,
	TODO_EDIT,
} from "./actionTypes";

const initialState = {
	todos: [],
	isLoading: false,
	isError: false,
};

export const reducerTodo = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_TODO_REQUEST: {
			return { ...state, isLoading: true, isError: false };
		}
		case GET_TODO_SUCCESS: {
			return { ...state, todos: payload, isLoading: false, isError: false };
		}
		case GET_TODO_FAILURE: {
			return { ...state, isLoading: false, isError: true };
		}

		// case TODO_ADD: {
		// 	axios.post("http://localhost:8080/todos", {
		// 		title: payload,
		// 		isCompleted: false,
		// 	});
		// 	break;
		// }
		// case TODO_EDIT: {
		// 	axios.patch(`http://localhost:8080/todos/${payload.id}`, {
		// 		title: payload.title,
		// 	});
		// 	break;
		// }
		// case TODO_DELETE: {
		// 	axios.delete(`http://localhost:8080/todos/${payload}`);
		// 	break;
		// }
		default: {
			return state;
		}
	}
};
