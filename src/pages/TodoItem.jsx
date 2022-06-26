import { Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const TodoItem = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState([]);

	const getTodo = async () => {
		let r = await axios.get(`/todos/${id}`);
		setTodo(r.data);
	};

	useEffect(() => {
		getTodo();
	}, []);

	return (
		<div>
			<Heading size="lg" mb={5}>
				{todo.title}
			</Heading>
			<Link to={`/todo/${id}/edit`}>
				<Button colorScheme="red">Edit</Button>
			</Link>
		</div>
	);
};

export default TodoItem;
