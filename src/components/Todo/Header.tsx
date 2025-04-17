import { FaCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="grid grid-cols-2 p-4 border-b-2 justify-center items-center">
      <div className="flex gap-2">
        <FaCircle className="text-red-500" />
        <FaCircle className="text-yellow-400" />
        <FaCircle className="text-green-500" />
      </div>
      <div className="flex justify-end">Toggle Dark Mode</div>
    </header>
  );
};

export default Header;
