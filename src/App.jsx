import { Routes, Route } from "react-router-dom";
import Nav from "./components/navBar/Nav";
import AllCoins from "./pages/AllCoins";
import SingleCoin from "./pages/SingleCoin";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "./store/slices/CoinsSlice";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.coins.currency);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toUpperCase()}&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`
        );
        const coins = await response.json();
        dispatch(setCoins(coins));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchCoins();
    }, 1000);
  }, [currency, currentPage]);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <AllCoins
              loading={loading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/:id" element={<SingleCoin />} />
      </Routes>
    </>
  );
}

export default App;
