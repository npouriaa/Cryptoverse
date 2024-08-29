import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white transition-all">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
