import img from "../../assets/landingPage/Intro.webp";

const Introduction = () => {
  return (
    <div className="w-full h-[40rem] bg-black flex justify-center items-center">
      <div className="flex justify-center items-center relative">
        <img className="max-sm:hidden sm2:block" src={img} alt="intro-bg" />
        <div className="absolute shadow-[0_0_8rem_7rem_#1B112B]"></div>
        <div className="absolute flex flex-col items-center justify-center gap-4 max-sm:w-[20rem] max-sm2:w-[24rem] sm2:w-[35rem] md2:w-auto">
          <h1 className="max-sm:text-[2rem] sm2:text-4xl font-bold text-white text-center">
            Cryptocurrency Price and Trend Monitor
          </h1>
          <p className="text-center text-[#bfbfbf] ">
            Monitor cryptocurrency prices and trends with our streamlined
            tracker, designed to help you manage your portfolio and make
            informed investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
