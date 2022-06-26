import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Total = () => {
	const [todoList, setTodoList] = useState([]);
	// const [count, setCount] = useState(0);

    let count=0;
	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].isCompleted) {
			// setCount(count + 1);
            count++;
		}
	}

	useEffect(() => {
		axios.get("/todos").then((r) => {
			setTodoList(r.data);
		});
	}, []);

	return (
		<Box>
			<Heading size="lg">Todo Status:</Heading>
			<Flex
				p="10px"
				gap="4"
				style={{
					margin: "2% auto",
					boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				}}
			>
				<Box p="4" bg="green.400">
					<Text fontSize="lg" as="u">
						Completed Todos:
					</Text>
					<br />
					{count}
				</Box>

				<Box p="4" bg="red.300">
					<Text fontSize="lg" as="u">
						Pending Todos:
					</Text>
					<br />
					{todoList.length - count}
				</Box>
			</Flex>
		</Box>
	);
};

export default Total;
