import img from "../../assets/landingPage/Intro.webp";
import { motion } from "framer-motion";

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
        <div className="w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className=" flex flex-col items-center justify-center gap-4 max-sm:w-[20rem] max-sm2:w-[24rem] sm2:w-[35rem] md2:w-[45rem] lg:w-[50rem]"
          >
            <h1 className="max-sm:text-[2rem] sm2:text-4xl font-bold text-white text-center">
              Cryptocurrency Price and Trend Monitor
            </h1>
            <p className="text-center text-[#bfbfbf] ">
              Monitor cryptocurrency prices and trends with our streamlined
              tracker, designed to help you manage your portfolio and make
              informed investment decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
