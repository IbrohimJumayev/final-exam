import React from "react";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

const CarouselSection = () => {
  const selectedCoins = useSelector((state) => state.selected.selected);

  const groupedSelectedCoins = [];
  const size = 4;

  for (let i = 0; i < selectedCoins.length; i += size) {
    groupedSelectedCoins.push(selectedCoins.slice(i, i + size));
  }


  return (
    <div className="h-44 bg-transparent max-w-[1232px] m-auto px-10">
      <Carousel>
        {groupedSelectedCoins.map((coin, index) => (
          <div key={index} className="flex gap-[220px]">
            {coin.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <img
                  className="w-[80px] h-[80px]"
                  src={s.image}
                  alt={s.symbol}
                />
                <div className="flex gap-2 mt-2">
                  <p className="text-sm">{s.symbol.toUpperCase()}</p>
                  <p
                    style={{ fontSize: "14px" }}
                    className={`${
                      s.price_change_percentage_24h > 0
                        ? "text-[#0ECB81]"
                        : "text-[#FF0000]"
                    }`}
                  >
                    %{s.price_change_percentage_24h.toFixed(2)}
                  </p>
                </div>
                <strong>{s.current_price.usd}</strong>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
