import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CoinsDataContextProvider } from "./context/CoinsDataContext";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
