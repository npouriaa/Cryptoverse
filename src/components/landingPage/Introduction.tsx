import img from "../../assets/landingPage/Intro.webp";
import { motion } from "framer-motion";
import { FaCoins } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Introduction = () => {
  return (
    <div className="w-full h-[40rem] bg-black flex justify-center items-center">
      <div className="flex flex-col justify-center items-center relative">
        <img
          className=" absolute max-sm:hidden sm2:block"
          src={img}
          alt="intro-bg"
        />
        <div className=" absolute shadow-[0_0_10rem_9rem_#1B112B]"></div>
        <div className="w-full z-10 flex flex-col justify-center items-center gap-8 max-sm:w-[20rem] max-sm2:w-[24rem] sm2:w-[35rem] md2:w-[45rem] lg:w-[50rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="flex flex-col items-center justify-center gap-4 w-full"
          >
            <h1 className="max-sm:text-[2rem] sm2:text-4xl font-bold text-white text-center">
              Cryptocurrency Price and Trend Monitor
            </h1>
            <p className="text-center text-[#bfbfbf]">
              Monitor cryptocurrency prices and trends with our streamlined
              tracker, designed to help you manage your portfolio and make
              informed investment decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="w-full flex items-center max-sm:justify-center sm2:justify-evenly flex-wrap max-sm:gap-6 sm2:gap-4"
          >
            <div className="w-32 h-32 rounded-xl bg-[#1A1A1A] flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-[#FF9332] border border-[#1A1A1A] hover:shadow-[#FF9332_0_15px_40px_-25px]">
              <FaCoins className="fill-[#FF9332]" size={40} />
              <p className="text-sm">Price tracking</p>
            </div>
            <div className="w-32 h-32 rounded-xl bg-[#1A1A1A] flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-[#FF9332] border border-[#1A1A1A] hover:shadow-[#FF9332_0_15px_40px_-25px]">
              <GoHistory className="fill-[#FF9332]" size={40} />
              <p className="text-sm">Historical price</p>
            </div>
            <div className="w-32 h-32 rounded-xl bg-[#1A1A1A] flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-[#FF9332] border border-[#1A1A1A] hover:shadow-[#FF9332_0_15px_40px_-25px]">
              <FaCodeCompare className="fill-[#FF9332]" size={40} />
              <p className="text-sm">Compare price</p>
            </div>
            <div className="w-32 h-32 rounded-xl bg-[#1A1A1A] flex flex-col gap-4 items-center justify-center cursor-pointer hover:-translate-y-2 transition-all hover:border-[#FF9332] border border-[#1A1A1A] hover:shadow-[#FF9332_0_15px_40px_-25px]">
              <FaRegHandshake className="fill-[#FF9332]" size={40} />
              <p className="text-sm">User friendly</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
