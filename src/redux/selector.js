import { VISIBILITY_FILTER } from "../constants";

export const getTodosState = (store, visibilityFiler) => {
  switch(visibilityFiler) {
    case VISIBILITY_FILTER.COMPLETED:
      return store.todos.filter(todo => todo.completed);
    case VISIBILITY_FILTER.ACTIVE:
      return store.todos.filter(todo => !todo.completed);
    default:
      return store.todos;
  }
}