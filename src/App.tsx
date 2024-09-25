import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CoinsDataContextProvider } from "./context/CoinsDataContext";

const App = () => {
  return (
    <CoinsDataContextProvider>
      <div className="bg-black text-white transition-all">
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CoinsDataContextProvider>
  );
};

export default App;
