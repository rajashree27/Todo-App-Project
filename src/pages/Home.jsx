import { Button, Heading, Input, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import style from "../styles/home.module.css";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/actions";
import Total from "./Total";

const Home = () => {
	const dispatch = useDispatch();
	let ref = useRef();

	const refreshPage = () => {
		window.location.reload(false);
	};

	const handleClick = () => {
		dispatch(
			addTodo({
				title: ref.current.value,
				isCompleted: false,
			})
		);
		refreshPage();
	};

	return (
		<div className={style.homeMainDiv}>
			<Heading size="lg">Enter todo:</Heading>
			<Input placeholder="Enter here..." variant="filled" m={5} ref={ref} />
			<Button colorScheme="blue" size="sm" mb="10%" onClick={handleClick}>
				Submit
			</Button>
			<Flex justify="space-between" gap="4">
				<TodoList />
				<Total />
			</Flex>
		</div>
	);
};

export default Home;
