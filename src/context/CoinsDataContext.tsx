import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CoinType } from "../types/DataTypes";
import axios from "axios";
import { options } from "../reusable/requestOptions";

type CoinsDataContextProviderType = {
  children: ReactNode;
};

type CoinsDataContextType = {
  coinsList: CoinType[];
  loading: boolean;
  error: string;
  paginatedCoins: CoinType[];
  setPaginatedCoins: Dispatch<SetStateAction<CoinType[]>>;
  getCoinsData?: () => Promise<void>;
};

const CoinsDataContext = createContext({} as CoinsDataContextType);

const CoinsDataContextProvider = ({
  children,
}: CoinsDataContextProviderType) => {
  const [coinsList, setCoinsList] = useState<CoinType[]>([] as CoinType[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [paginatedCoins, setPaginatedCoins] = useState<CoinType[]>(
    [] as CoinType[]
  );

  const getCoinsData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        options
      );
      setCoinsList(res.data);
      setPaginatedCoins(res.data.slice(0, 10));
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <CoinsDataContext.Provider
      value={{ coinsList, loading, error, paginatedCoins, setPaginatedCoins , getCoinsData }}
    >
      {children}
    </CoinsDataContext.Provider>
  );
};

export { CoinsDataContextProvider, CoinsDataContext };
