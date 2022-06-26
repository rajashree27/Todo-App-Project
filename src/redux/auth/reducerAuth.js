import * as actions from "./actionTypes";

const token = JSON.parse(localStorage.getItem("token")) || "";

const initialState = {
	isAuth: !!token,
	isLoading: false,
	isError: false,
	token: token,
};

export const reducerAuth = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.LOGIN_LOADING: {
			return { ...state, isLoading: true };
		}
		case actions.LOGIN_SUCCESS: {
			localStorage.setItem("token", payload.token);
			console.log("login success")
			return { ...state, isAuth: true, isLoading: false };
		}
		case actions.LOGIN_FAILURE: {
			return { ...state, isError: true, isLoading: false, isAuth: false };
		}

		case actions.LOGOUT: {
			localStorage.removeItem("token");
			return { ...state, isAuth: false };
		}

		default: {
			return state;
		}
	}
};
