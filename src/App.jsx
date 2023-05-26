import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";

function App() {
  return (
    <>
      <Container maxW="container.md">
        <Heading my="5" textAlign="center">
          What's the plan for today?
        </Heading>
        <AddTodo />
        <VisibilityFilter />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
