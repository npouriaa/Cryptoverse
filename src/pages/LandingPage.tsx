import AboutCrypto from "../components/landingPage/AboutCrypto";
import CoinsList from "../components/landingPage/CoinsList";
import Introduction from "../components/landingPage/Introduction";

const LandingPage = () => {
  return (
    <div className="flex flex-col max-sm:gap-10 sm2:gap-0">
      <Introduction />
      <CoinsList />
      <AboutCrypto />
    </div>
  );
};

export default LandingPage;
