import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white transition-all">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
