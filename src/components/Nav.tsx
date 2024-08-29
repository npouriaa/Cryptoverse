import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const html = document.querySelector<HTMLHtmlElement>("html");

  const darkModeHandler = (darkMode: boolean) => {
    html?.classList.toggle("dark");
    localStorage.setItem("darkMode", darkMode + "");
    setIsDarkMode(!isDarkMode)
  };

  return (
    <nav className=" h-16 py-2 px-4 bg-[#0D0D0D] border-b border-[#aaaaaa3c] flex items-center justify-between sticky top-0">
      <Link className="text-2xl font-semibold flex" to="/">
        <span className="text-[#FF9332]">C</span><p className="text-white">rypto</p>
        <span className="text-[#FF9332]">V</span><p className="text-white">erse</p>
        <span className="text-[#FF9332]">.</span>
      </Link>
      <ul className="sm:flex gap-3 items-center max-sm:hidden">
        <li className="hover:text-[#FF9332] text-white transition-all p-1">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#FF9332] text-white transition-all p-1">
          <Link to="/compare">Compare</Link>
        </li>
        <li className="hover:text-[#FF9332] text-white transition-all p-1">
          <Link to="/coins">Cryptocurrencies</Link>
        </li>
        <li className="relative flex justify-center items-center hover:text-[#FF9332] text-white transition-all p-1 w-7 h-7 overflow-hidden">
          <button
            className={`absolute transition-all ${
              isDarkMode ? "translate-x-0" : "translate-x-8"
            }`}
            onClick={() => darkModeHandler(false)}
          >
            <FiSun size={22} />
          </button>
          <button
            className={`absolute transition-all ${
              isDarkMode ? "translate-x-8" : "translate-x-0"
            }`}
            onClick={() => darkModeHandler(true)}
          >
            <IoMoonOutline size={22} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
