import { useState, useContext } from "react";
import TodosContext from "../../globalStates/TodosContext";

import EditModal from "./EditModal";
import TodoCard from "./TodoCard";

const TodoLists = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  // Handle checkbox toggle (mark todo as complete/incomplete)
  const handleCheckboxChange = (id: number, checked: boolean) => {
    // Update the `isCompleted` status of the todo with the matching ID
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: checked } : todo
      )
    );
  };

  const handleEdit = (id: number): void => {
    // Iterate over the list of todos
    const toEdit = todos.find((todo) => todo.id === id);

    // Check if the todo item exists (not null or undefined)
    if (toEdit) {
      // Set the ID of the todo being edited
      setEditingTodoId(id);

      // Set the current text of the todo in state (used to pre-fill the input)
      setEditingText(toEdit.text);

      // Open the modal for editing
      setIsModalOpen(true);
    }
  };

  // Handle saving changes after editing a todo
  const handleSaveEdit = () => {
    // Only proceed if the input isn't empty and there's a todo being edited
    if (editingText.trim() && editingTodoId !== null) {
      // Update the text of the todo with the matching ID
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodoId
            ? { ...todo, text: editingText.trim() }
            : todo
        )
      );

      // Close the modal and reset editing state
      setIsModalOpen(false);
      setEditingTodoId(null);
      setEditingText("");
    }
  };

  // Handle deleting a todo by ID
  const handleDelete = (id: number): void => {
    // Remove the todo with the given ID from the list
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Update state with the filtered list
    setTodos(updatedTodos);
  };

  return (
    <>
      <ul className="bg-white p-4 rounded-lg shadow-md space-y-3 max-h-96 overflow-y-auto">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No Todos...</p>
        ) : (
          todos.map((todo) => (
            <TodoCard
              todo={todo}
              handleCheckboxChange={handleCheckboxChange}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        )}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <EditModal
          editingText={editingText}
          setEditingText={setEditingText}
          setIsModalOpen={setIsModalOpen}
          handleSaveEdit={handleSaveEdit}
        />
      )}
    </>
  );
};

export default TodoLists;
