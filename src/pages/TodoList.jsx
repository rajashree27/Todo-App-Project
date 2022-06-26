import { Box, Button, Checkbox, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import {getTodoList} from "../redux/todos/actions"

const TodoList = () => {

	const dispatch = useDispatch();

	const { isLoading, todos, isError } = useSelector(
		(state) => state.todoReducer
	);

    const refreshPage = ()=> {
        window.location.reload(false);
      }

	const handleChange = (e,id) => {
		if (e.target.checked) {
            console.log("checked");
			axios.patch(`/todos/${id}`, { isCompleted: true });
            refreshPage();
			
		} else {
			axios.patch(`/todos/${id}`, {
				isCompleted: false,
			});
            refreshPage();
		}
	};

	const handleDelete = (id) => {
		axios.delete(`/todos/${id}`).then((r) => {
			dispatch(getTodoList());
		});
	};

	useEffect(() => {
		dispatch(getTodoList());
	}, [dispatch]);

	if (isLoading) {
		return <Text fontSize='xl' as='i'>Loading!!!...</Text>;
	} else if (isError) {
		return <Text fontSize='xl' as='i' color='tomato'>Something went wrong!!!...</Text>;
	} else
		return (
			<Box alignItems='center'>
				<Heading size="lg">Todo List:</Heading>
				<Box
					p="10px"
					style={{
						margin: "2% auto",
						boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        alignItems:'left'
					}}
                    
				>
					{todos.map((el) => {
						return (
							<Box
								key={el.id}
								m={5}
								style={{
									display: "flex",
									gap: "20px",
									alignItems: "center",
								}}
							>
								<Checkbox
									size="md"
									colorScheme="green"
									onChange={(e) => handleChange(e, el.id)}
								></Checkbox>
								<Link to={`/todo/${el.id}`}>
									{el.isCompleted ? (
										<Text as="del" fontSize="1.3rem">
											{el.title}
										</Text>
									) : (
										<Text fontSize="1.3rem">{el.title}</Text>
									)}
								</Link>
								<Button
									size="sm"
									colorScheme="red"
									onClick={() => handleDelete(el.id)}
								>
									Delete
								</Button>
							</Box>
						);
					})}
				</Box>
			</Box>
		);
};

export default TodoList;
