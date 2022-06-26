import {
	GET_TODO_FAILURE,
	GET_TODO_REQUEST,
	GET_TODO_SUCCESS,
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

		default: {
			return state;
		}
	}
};
