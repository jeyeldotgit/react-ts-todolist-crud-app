import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
