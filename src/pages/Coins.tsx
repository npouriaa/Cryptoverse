import { ChangeEvent, useContext, useState } from "react";
import CoinsTable from "../components/CoinsTable";
import { CoinsDataContext } from "../context/CoinsDataContext";
import PaginationComponent from "../components/coins/PaginationComponent";

const Coins = () => {
  const { coinsList, loading, error, paginatedCoins, setPaginatedCoins } =
    useContext(CoinsDataContext);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  let filteredCoins = coinsList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coinsList.slice(initialCount, initialCount + 10));
  };

  return (
    <div className="flex justify-center flex-col items-center max-sm:p-2 md3:p-6">
      <CoinsTable
        dataArray={search ? filteredCoins : paginatedCoins}
        loading={loading}
        error={error}
        showMarketCap={true}
        showTotalVolume={true}
        transitionalTableRow={true}
        loadingRowCount={10}
      />
      <PaginationComponent handlePageChange={handlePageChange} page={page} />
    </div>
  );
};

export default Coins;
