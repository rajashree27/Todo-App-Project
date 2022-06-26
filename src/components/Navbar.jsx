import { Button, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import style from "../styles/navbar.module.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Navbar = () => {
	const {isAuth}=useSelector((state)=>state.auth)

	let navigate = useNavigate();
	const dispatch=useDispatch()

	const { colorMode, toggleColorMode } = useColorMode();

	const handleLog = () => {
		navigate("/login");
	};
	return (
		<div className={style.navbar}>
			<div className={style.home} onClick={() => navigate("/")}>Home</div>
			<div className={style.logAndTheme}>
				<div>
					<Button onClick={handleLog}>{isAuth?"":"Login"}</Button>
				</div>
				<div>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? (
							<Icon as={MoonIcon} />
						) : (
							<Icon as={SunIcon} />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
