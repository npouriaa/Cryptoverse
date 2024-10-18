import { ChangeEvent, useContext, useEffect, useState } from "react";
import CoinsTable from "../components/CoinsTable";
import { CoinsDataContext } from "../context/CoinsDataContext";
import PaginationComponent from "../components/coins/PaginationComponent";
import Search from "../components/coins/Search";

const Coins = () => {
  const {
    coinsList,
    loading,
    error,
    paginatedCoins,
    setPaginatedCoins,
    getCoinsData,
  } = useContext(CoinsDataContext);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  let filteredCoins = coinsList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coinsList.slice(initialCount, initialCount + 10));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (getCoinsData) getCoinsData();
  }, []);

  return (
    <div className="min-h-[86.2vh] flex justify-start flex-col items-center max-sm:pt-6 max-sm:p-2 md3:p-6">
      <Search search={search} handleChange={handleChange} />
      <CoinsTable
        dataArray={search ? filteredCoins : paginatedCoins}
        loading={loading}
        error={error}
        showMarketCap={true}
        showTotalVolume={true}
        transitionalTableRow={true}
        loadingRowCount={10}
      />
      {!search && !error && (
        <PaginationComponent handlePageChange={handlePageChange} page={page} />
      )}
    </div>
  );
};

export default Coins;
