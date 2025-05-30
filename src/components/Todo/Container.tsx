import { useState, useContext } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { Todo } from "../types/type";
import TodoLists from "./TodoLists";
import TodosContext from "../../globalStates/TodosContext";

const Container = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { todos, setTodos } = useContext(TodosContext);

  const handleAddTodo = (newTodo: string) => {
    // Submitting the Form
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      isCompleted: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const handleInputChange = (term: string) => {
    setNewTodo(term);
  };

  return (
    <section className="w-5/6 h-4/5 border-2 border-[#333333] rounded-3xl md:w-3/4 md:h-3/4">
      <Header></Header>
      <section className="p-6 flex flex-col gap-5">
        <TodoInput
          onInputChange={handleInputChange}
          newTodo={newTodo}
          addTodo={handleAddTodo}
        />
        <TodoLists />
      </section>
    </section>
  );
};

export default Container;
