import React from "react";
import { Todo } from "../components/types/type";

type TodosContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
});

export default TodosContext;
