import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TodoEdit = () => {
	const ref = useRef();
	const { id } = useParams();
	const navigate = useNavigate();

	const handleEdit = async () => {
		await axios.patch(`/todos/${id}`, { title: ref.current.value });
		alert("Todo is updated");
		navigate("/");
	};

	return (
		<div>
			<Heading size="lg" mb={5}>
				Edit todo:
			</Heading>
			<Flex gap="20px" justifyContent="center">
				<Input
					variant="outline"
					ref={ref}
					placeholder="Enter updated todo..."
					mb={5}
					w="50%"
				/>
				<Button colorScheme="red" onClick={handleEdit}>
					Update
				</Button>
			</Flex>
		</div>
	);
};

export default TodoEdit;
