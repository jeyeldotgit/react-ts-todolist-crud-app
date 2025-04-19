import { ReactNode, useState } from "react";
import { Todo } from "../components/types/type";
import TodosContext from "./TodosContext";

type TodosProviderProps = {
  children: ReactNode;
};

const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
