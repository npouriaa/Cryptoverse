import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useRef, useState } from "react";

type UlElementProps = {
  classNames: string;
};

const UlElement = ({ classNames }: UlElementProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const html = document.querySelector<HTMLHtmlElement>("html");

  const darkModeHandler = (darkMode: boolean) => {
    html?.classList.toggle("dark");
    localStorage.setItem("darkMode", darkMode + "");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ul className={classNames}>
      <li className="hover:text-[#FF9332] text-white transition-all p-1">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#FF9332] text-white transition-all p-1">
        <Link to="/compare">Compare</Link>
      </li>
      <li className="hover:text-[#FF9332] text-white transition-all p-1">
        <Link to="/coins">Cryptocurrencies</Link>
      </li>
      <li className="relative flex justify-center items-center hover:text-[#FF9332] text-white p-1 w-7 h-7 overflow-hidden">
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
  );
};

const Nav = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  return (
    <nav className="h-16 py-2 px-4 bg-[#0D0D0D] border-b border-[#aaaaaa3c] flex items-center justify-between sticky top-0">
      <Link className="text-2xl font-semibold flex" to="/">
        <span className="text-[#FF9332]">C</span>
        <p className="text-white">rypto</p>
        <span className="text-[#FF9332]">V</span>
        <p className="text-white">erse</p>
        <span className="text-[#FF9332]">.</span>
      </Link>
      <UlElement classNames="sm:flex max-sm:hidden gap-3" />
      <button
        onClick={() => setOpenSideMenu(!openSideMenu)}
        className="w-8 h-8 z-10 relative justify-center items-center overflow-hidden max-sm:flex sm:hidden"
      >
        <svg
          ref={svgRef}
          onClick={() => svgRef.current?.classList.toggle("active")}
          className="ham hamRotate ham1 absolute"
          viewBox="0 0 100 100"
          width={48}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
      <div className={`bg-[#1A1A1A] ${openSideMenu ? "w-52" : "w-0"} transition-all duration-300 h-screen absolute right-0 top-0 overflow-x-hidden`}>
        <UlElement classNames="max-sm:flex sm:hidden flex-col p-4 mt-8" />
      </div>
    </nav>
  );
};

export default Nav;
