import React from "react";
import Header from "../components/header/Header";
import CoinList from "../components/coinList/CoinList";

const AllCoins = ({ currentPage, setCurrentPage, loading }) => {
  return (
    <div>
      <Header />
      <CoinList
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AllCoins;
