import { useState, useContext } from "react";
import TodosContext from "../../globalStates/TodosContext";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdCheckbox } from "react-icons/io";

const TodoLists = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: checked } : todo
      )
    );
  };

  const handleEdit = (id: number): void => {
    todos.map((todo) => {
      if (todo) {
        setEditingTodoId(id);
        setEditingText(todo.text);
        setIsModalOpen(true);
      }
    });
  };

  const handleSaveEdit = () => {
    if (editingText.trim() && editingTodoId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodoId
            ? { ...todo, text: editingText.trim() }
            : todo
        )
      );
      setIsModalOpen(false);
      setEditingTodoId(null);
      setEditingText("");
    }
  };

  const handleDelete = (id: number): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <ul className="bg-white p-4 rounded-lg shadow-md space-y-3 max-h-96 overflow-y-auto">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No Todos...</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition break-words ${
                todo.isCompleted
                  ? "line-through text-gray-500"
                  : "text-[#333333]"
              }`}
            >
              <p className="font-inter text-lg flex-1 mr-3">{todo.text}</p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    handleCheckboxChange(todo.id, !todo.isCompleted)
                  }
                  className="text-2xl text-blue-600"
                >
                  {todo.isCompleted ? (
                    <IoMdCheckbox />
                  ) : (
                    <IoIosCheckboxOutline />
                  )}
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoLists;
