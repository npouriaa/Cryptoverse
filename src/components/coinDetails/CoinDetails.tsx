import { useParams } from "react-router-dom";
import { getCoinDetailsDatails } from "../../functions/getCoinDetailsData";
import { useEffect, useState } from "react";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCoinDetailsDatails(coinId, setLoading, setError);
  }, []);

  return <div className="w-full"></div>;
};

export default CoinDetails;
