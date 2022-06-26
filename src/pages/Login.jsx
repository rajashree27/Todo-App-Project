import React, { useEffect, useState } from "react";
import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Heading,
} from "@chakra-ui/react";
import style from "../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/actions";

const Login = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	const [loginCreds, setLoginCreds] = useState({
		email: "",
		password: "",
	});

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginCreds({ ...loginCreds, [name]: value });
	};
	// console.log(loginCreds);

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email: loginCreds.email, password: loginCreds.password }));
		console.log(loginCreds);
	};

	const { isAuth } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isAuth) navigate("/");
	}, [isAuth]);

	return (
		<div className={style.loginMainDiv}>
			<Heading size="lg">Enter login details:</Heading>
			<form action="submit" onSubmit={handleLoginSubmit}>
				<FormControl>
					<FormLabel mt={4}>Enter email address:</FormLabel>
					<Input
						placeholder="Enter email..."
						value={loginCreds.email}
						onChange={handleLoginChange}
						type="email"
						name="email"
					/>

					<FormLabel mt={4}>Enter password:</FormLabel>
					<InputGroup size="md">
						<Input
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Enter password..."
							name="password"
							value={loginCreds.password}
							onChange={handleLoginChange}
						/>
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>

					<Button mt={4} colorScheme="blue" type="submit">
						Submit
					</Button>
				</FormControl>
			</form>
		</div>
	);
};

export default Login;
