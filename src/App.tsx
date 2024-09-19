import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-black text-white transition-all">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
