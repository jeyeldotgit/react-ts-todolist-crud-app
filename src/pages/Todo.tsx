import Container from "../components/Todo/Container";

const Todo = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-inter font-bold text-xl md:text-3xl">
        Welcome To My Simple To-Do App
      </h1>
      <Container />
    </div>
  );
};

export default Todo;
