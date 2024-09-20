import axios from "axios";
import { useEffect, useState } from "react";
import { CoinType } from "../../types/DataTypes";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const CoinsList = () => {
  const [list, setList] = useState<CoinType[]>([]);

  const getCoin = async () => {
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
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div className="w-full flex justify-center p-4">
      <table className="bg-[#0D0D0D] rounded-xl">
        <thead>
          <tr>
            <th className="w-[4rem] text-start px-6 pb-4 pt-5 font-light text-[#999999]">
              #
            </th>
            <th className="w-[20rem] p-4 text-start pt-5 font-light text-[#999999]">
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
          {list?.slice(0, 5).map((coin, index) => (
            <tr key={coin.id} className="hover:bg-[#1A1A1A] cursor-pointer">
              <td className="text-start px-6 py-4">{index + 1}</td>
              <td className="flex items-center gap-3 p-4">
                <img className="h-8" src={coin.image} alt="coin-image" />
                <p>{coin.name}</p>
                <p>.</p>
                <p className="uppercase">{coin.symbol}</p>
              </td>
              <td className="p-4">{coin.current_price.toFixed()}$</td>
              {
                <td className="p-4 text-sm">
                  {coin.price_change_percentage_24h >= 0 ? (
                    <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                      <BiSolidUpArrow className="fill-[#6ccf59]" size={10} />
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </div>
                  ) : (
                    <div className="bg-[#2F1B1C] text-[#ff4d4d] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                      <BiSolidDownArrow className="fill-[#ff4d4d]" size={10} />
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </div>
                  )}
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsList;
