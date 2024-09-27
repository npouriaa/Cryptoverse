import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CoinType } from "../types/DataTypes";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

type CoinsTableProps = {
  loading: boolean;
  dataArray: CoinType[];
  error: string;
  loadingRowCount: number;
  showMarketCap: boolean;
  showTotalVolume: boolean;
  transitionalTableRow: boolean;
};

const CoinsTable = ({
  loading,
  dataArray,
  error,
  loadingRowCount,
  showMarketCap,
  showTotalVolume,
  transitionalTableRow,
}: CoinsTableProps) => {
  return (
    <div className="flex justify-center items-center w-full p-4">
      {error ? (
        <div className="p-4 rounded-xl bg-[#0D0D0D]  2xl:w-1/3 sm2:w-3/5 max-sm:w-full text-red-500 text-center text-sm">
          {error} - Error while loading currencies. Please try again later
        </div>
      ) : (
        <table className="bg-[#0D0D0D] rounded-xl">
          <thead>
            <tr className="text-sm">
              <th className="max-sm:hidden sm:block max-sm:w-[1rem] sm2:w-[4rem] text-start px-6 pb-4 pt-5 font-light text-[#999999]">
                #
              </th>
              <th className="max-sm:w-[15rem] sm2:w-[20rem] p-4 text-start pt-5 font-light text-[#999999]">
                Name
              </th>
              <th className="w-[5rem] p-4 text-start pt-5 font-light text-[#999999]">
                Price
              </th>
              <th className="w-[8.3rem] p-4 text-start pt-5 font-light text-[#999999]">
                24h Change
              </th>
              {showTotalVolume && (
                <th className="p-4 text-start pt-5 font-light text-[#999999] max-sm:hidden md3:table-cell md3:pr-4 lg:pr-0">
                  Total volume
                </th>
              )}
              {showMarketCap && (
                <th className="p-4 text-start pt-5 font-light text-[#999999] max-sm:hidden lg:table-cell lg:pr-4 ">
                  Market cap
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(loadingRowCount)].map((item, index) => (
                <tr key={index}>
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
                  {showTotalVolume && (
                    <td className="p-4">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                  )}
                  {showMarketCap && (
                    <td className="p-4">
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        height={30}
                        animation="wave"
                        variant="rounded"
                      />
                    </td>
                  )}
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
            ) : dataArray.length > 0 ? (
              dataArray?.map((coin, index) => {
                const motionProps = transitionalTableRow
                  ? {
                      initial: { opacity: 0, x: -50 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: {
                        delay: (index % 8) * 0.2,
                        duration: 0.5,
                      },
                      viewport: { once: true },
                    }
                  : {};
                return (
                  <motion.tr
                    key={coin.id}
                    className="hover:bg-[#1A1A1A] cursor-pointer max-sm:text-sm"
                    {...motionProps}
                  >
                    <td className="text-start px-6 py-4 max-sm:hidden sm:table-cell">
                      {coin.market_cap_rank}
                    </td>
                    <td className="flex items-center gap-3 p-4 bg-">
                      <img className="h-8" src={coin.image} alt={coin.id} />
                      <p>{coin.name}</p>
                      <p className="max-sm:hidden sm2:block">.</p>
                      <p className="uppercase max-sm:hidden sm2:block">
                        {coin.symbol}
                      </p>
                    </td>
                    <td className="p-4">
                      {coin.current_price.toLocaleString()}$
                    </td>
                    <td className="p-4 text-sm">
                      {coin.price_change_percentage_24h >= 0 ? (
                        <div className="bg-[#1C291E] text-[#6ccf59] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                          <BiSolidUpArrow
                            className="fill-[#6ccf59]"
                            size={10}
                          />
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      ) : (
                        <div className="bg-[#310D0D] text-[#FF4D4D] p-1 w-[max-content] flex items-center gap-1 rounded-lg">
                          <BiSolidDownArrow
                            className="fill-[#FF4D4D]"
                            size={10}
                          />
                          {Math.abs(coin.price_change_percentage_24h).toFixed(
                            2
                          )}
                          %
                        </div>
                      )}
                    </td>
                    {showTotalVolume && (
                      <td className="p-4 max-sm:hidden md3:table-cell md3:pr-6 lg:pr-0">
                        {coin.total_volume.toLocaleString()}
                      </td>
                    )}
                    {showMarketCap && (
                      <td className="p-4 max-sm:hidden lg:table-cell lg:pr-6">
                        {coin.market_cap.toLocaleString()}
                      </td>
                    )}
                  </motion.tr>
                );
              })
            ) : (
              <tr>
                <td className="max-sm:hidden sm:table-cell px-6 py-4">-</td>
                <td className="p-4 text-sm">Nothing found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinsTable;
