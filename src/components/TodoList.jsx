import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
import { getTodosState } from "../redux/selector";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosState(todos, visibilityFilter);

  return (
    <Box my={4}>
      {filterTodos.length ? (
        filterTodos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          Kosong
        </Box>
      )}
    </Box>
  );
};
