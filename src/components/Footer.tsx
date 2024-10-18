import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-14 border-t-[1px] border-[#1A1A1A] flex justify-center items-center gap-1">
      Made by <Link to="https://www.linkedin.com/in/npouriaa" target="_blank" className="text-[#FF9332] underline">Pouria</Link>
    </footer>
  );
};

export default Footer;
