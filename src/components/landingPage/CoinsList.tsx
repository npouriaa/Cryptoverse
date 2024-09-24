import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CoinType } from "../../types/DataTypes";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CoinsTable from "../CoinsTable";

const CoinsList = () => {
  const [list, setList] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const getCoin = async () => {
    setLoading(true);
    setError("");
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-api-key": import.meta.env.VITE_API_KEY,
        },
      };
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        options
      );
      setList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCoin();
  }, []);

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
        dataArray={list?.splice(0, 5)}
        error={error}
        loading={loading}
        loadingRowCount={5}
        showMarketCap={false}
        showTotalVolume={false}
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
