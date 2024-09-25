import { useContext, useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CoinsTable from "../CoinsTable";
import { CoinsDataContext } from "../../context/CoinsDataContext";

const CoinsList = () => {
  const { coinsList, loading, error } = useContext(CoinsDataContext);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transitionDelay: ".3s",
        transitionDuration: "0.75s",
      }}
      className={`w-full flex flex-col items-center gap-5 ${
        error ? "justify-start" : "justify-center"
      } h-[max-content]`}
    >
      <CoinsTable
        dataArray={coinsList?.splice(0, 5)}
        error={error}
        loading={loading}
        loadingRowCount={5}
        showMarketCap={false}
        showTotalVolume={false}
        transitionalTableRow={false}
      />
      <Link
        to="/coins"
        className="px-4 py-2 border rounded-2xl border-1 border-[#404040] bg-[#000000] hover:bg-[#262626] transition-all"
      >
        See more
      </Link>
    </section>
  );
};

export default CoinsList;
