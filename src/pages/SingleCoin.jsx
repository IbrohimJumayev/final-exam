import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutCoin from "../components/coinView/AboutCoin";
import Loading from "../components/loading/Loading";
import LineChart from "../components/coinView/LineChart";
import Buttons from "../components/coinView/Buttons";

const SingleCoin = () => {
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinlgeCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const coin = await response.json();
        setCoin(coin);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchSinlgeCoin();
    }, 1000);
  }, [id]);
  return (
    <div className="flex mt-6 max-lg:flex-col">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="col1">
            <AboutCoin coin={coin} />
          </div>
          <div className="col2">
            <LineChart />
            <Buttons />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCoin;
