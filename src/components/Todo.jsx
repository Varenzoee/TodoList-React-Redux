import { Box, Checkbox, Text, Flex, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleTodo, editTodo, deleteTodo } from "../redux/actions";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  const handleCheked = () => dispatch(toogleTodo(todo.id));

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo(todo.id, editContent));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => dispatch(deleteTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Box mb={1} boxShadow="xs" p="6" rounded="md" bg="whit">
      {!isEditing ? (
        <Flex alignItems="center">
          <Checkbox
            onChange={handleCheked}
            colorScheme="teal"
            isChecked={cheked}
          >
            <Text as={todo.completed && "del"}>{todo.content}</Text>
          </Checkbox>
          <span>
            <IconButton
              icon={<EditIcon />}
              onClick={handleEdit}
              ml={4}
              variant="ghost"
            />
          </span>
          <span>
            <IconButton
              icon={<DeleteIcon />}
              onClick={handleDelete}
              ml={4}
              variant="ghost"
            />
          </span>
        </Flex>
      ) : (
        <Flex alignItems="center">
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <IconButton
            icon={<EditIcon />}
            onClick={handleEdit}
            ml={2}
            variant="ghost"
          />
        </Flex>
      )}
    </Box>
  );
};
