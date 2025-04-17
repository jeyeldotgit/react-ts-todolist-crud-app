import { Todo } from "../types/type";

type TodoListsProps = {
  todos: Todo[];
};

const TodoLists = ({ todos }: TodoListsProps) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <p>No Todos...</p>
      ) : (
        todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoLists;
