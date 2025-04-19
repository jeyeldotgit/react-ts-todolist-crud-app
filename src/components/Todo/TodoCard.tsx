import { Todo } from "../types/type";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdCheckbox } from "react-icons/io";

type TodoCardProps = {
  todo: Todo;
  handleCheckboxChange: (id: number, bool: boolean) => void;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
};

const TodoCard = ({
  todo,
  handleEdit,
  handleDelete,
  handleCheckboxChange,
}: TodoCardProps) => {
  return (
    <li
      key={todo.id}
      className={`flex items-center justify-between border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition break-words ${
        todo.isCompleted ? "line-through text-gray-500" : "text-[#333333]"
      }`}
    >
      <p className="font-inter text-lg flex-1 mr-3">{todo.text}</p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => handleCheckboxChange(todo.id, !todo.isCompleted)}
          className="text-2xl text-blue-600"
        >
          {todo.isCompleted ? <IoMdCheckbox /> : <IoIosCheckboxOutline />}
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
  );
};

export default TodoCard;
