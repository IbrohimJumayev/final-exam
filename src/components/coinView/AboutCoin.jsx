import React from "react";

const AboutCoin = ({ coin }) => {
  return (
    <div className="border-r-2 border-[#808080] px-6 pb-20">
      <div className="flex justify-center">
        <img className="w-[200px] h-[200px]" src={coin.image.large} alt="" />
      </div>

      <p className="text-center mt-5 font-bold text-5xl mb-5">{coin.name}</p>
      <p className="font-light mb-3">{coin.description.en.slice(0, 189)}</p>
      <p className="font-bold text-2xl">
        Rank :{" "}
        <span className="font-light text-xl ml-2">{coin.market_cap_rank}</span>
      </p>
      <p className="font-bold text-2xl">
        Current Price :{" "}
        <span className="font-light text-xl ml-2">
          {coin.market_data?.current_price?.usd?.toLocaleString()}
        </span>
      </p>
      <p className="font-bold text-2xl">
        Market Cap :
        <span className="font-light text-xl ml-2">
          {coin.market_cap?.aed.toLocaleString() ||
            (234423423).toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default AboutCoin;
