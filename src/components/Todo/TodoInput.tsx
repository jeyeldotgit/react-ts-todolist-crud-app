type TodoInputProps = {
  onInputChange: (arg: string) => void;
  addTodo: (arg: string) => void;
  newTodo: string;
};

const TodoInput = ({ onInputChange, newTodo, addTodo }: TodoInputProps) => {
  return (
    <form
      className="flex gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(newTodo);
      }}
    >
      <input
        className="p-2 border-2 border-black rounded-2xl bg-white text-black"
        type="text"
        name="todo"
        value={newTodo}
        placeholder="Add Task..."
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      <button className="bg-[#333333] text-white p-2 rounded-2xl" type="submit">
        Add ToDo
      </button>
    </form>
  );
};

export default TodoInput;
