import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CoinType } from "../../types/DataTypes";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { Skeleton } from "@mui/material";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { convertNumber } from "../../functions/convertNumber";

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
      } p-4 h-[30rem]`}
    >
      {error ? (
        <div className="p-4 rounded-xl bg-[#0D0D0D] 2xl:w-1/3 sm2:w-3/5 max-sm:w-full text-red-500 text-center">
          {error} - Error while loading currencies. Please try again later
        </div>
      ) : (
        <table className="bg-[#0D0D0D] rounded-xl">
          <thead>
            <tr className="text-sm">
              <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm2:w-[4rem] text-start px-6 pb-4 pt-5 font-light text-[#999999]">
                #
              </th>
              <th className="max-sm:w-[9rem] sm2:w-[20rem] p-4 text-start pt-5 font-light text-[#999999]">
                Name
              </th>
              <th className="w-[5rem] p-4 text-start pt-5 font-light text-[#999999]">
                Price
              </th>
              <th className="w-[10rem] p-4 text-start pt-5 font-light text-[#999999]">
                24h Change
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? [...Array(4)].map(() => (
                  <tr>
                    <td className="px-6 py-4 max-sm:hidden sm:block">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        width={15}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                    <td className="p-4">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                    <td className="p-4">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                    <td className="p-4">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                  </tr>
                ))
              : list?.slice(0, 5).map((coin, index) => (
                  <tr
                    key={coin.id}
                    className="hover:bg-[#1A1A1A] cursor-pointer max-sm:text-sm sm2:text-base"
                  >
                    <td className="text-start px-6 py-4 max-sm:hidden sm:table-cell">
                      {index + 1}
                    </td>
                    <td className="flex items-center gap-3 p-4">
                      <img className="h-8" src={coin.image} alt={coin.id} />
                      <p>{coin.name}</p>
                      <p className="max-sm:hidden sm2:block">.</p>
                      <p className="uppercase max-sm:hidden sm2:block">
                        {coin.symbol}
                      </p>
                    </td>
                    <td className="p-4">{convertNumber(coin.current_price)}$</td>
                    {
                      <td className="p-4 text-sm">
                        {coin.price_change_percentage_24h >= 0 ? (
                          <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                            <BiSolidUpArrow
                              className="fill-[#6ccf59]"
                              size={10}
                            />
                            {Math.abs(coin.price_change_percentage_24h).toFixed(
                              2
                            )}
                            %
                          </div>
                        ) : (
                          <div className="bg-[#2F1B1C] text-[#ff4d4d] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                            <BiSolidDownArrow
                              className="fill-[#ff4d4d]"
                              size={10}
                            />
                            {Math.abs(coin.price_change_percentage_24h).toFixed(
                              2
                            )}
                            %
                          </div>
                        )}
                      </td>
                    }
                  </tr>
                ))}
          </tbody>
        </table>
      )}
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
