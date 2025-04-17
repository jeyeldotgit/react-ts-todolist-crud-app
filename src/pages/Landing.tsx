import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-inter">This is Landing Page</h1>
      <button
        className="p-2 border-2 border-black rounded-2xl bg-white text-black hover:bg-black hover:text-white transition duration-200"
        onClick={() => navigate("/todo")}
      >
        Go to Todo
      </button>
    </div>
  );
};

export default Landing;
