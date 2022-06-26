import * as actions from "./actionTypes";
import axios from "axios"

export const login = (payload) => (dispatch) => {
	dispatch({ type: actions.LOGIN_LOADING });

	axios
		.post("https://reqres.in/api/login", payload)
		.then((r) => {
			dispatch({ type: actions.LOGIN_SUCCESS, payload: r.data });
		})
		.catch(() => {
			dispatch({ type: actions.LOGIN_FAILURE });
		});
};

export const logout = () => (dispatch) => {
	dispatch({ type: actions.LOGOUT });
};
