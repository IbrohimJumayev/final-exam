import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrency } from "../../store/slices/CoinsSlice";
import DrawerSection from "./DrawerSection";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch(setCurrency(selectedCurrency));
  };
  const currency = useSelector((state) => state.coins.currency);


  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="max-w-[1232px] m-auto my-5 flex justify-between items-center max-sm:px-4">
      <div>
        <Link to="/">
          <p className="font-bold text-sky text-xl">CRYPTOFOLIO</p>
        </Link>
      </div>
      <div>
        <select
          id="currency"
          className="bg-transparent  border-none"
          onChange={handleCurrencyChange}
        >
          <option value="usd">USD</option>
          <option value="rub">RUB</option>
          <option value="jpy">JPY</option>
        </select>
        <button onClick={() => setIsOpen(true)} className="font-semibold text-[#000000DE] bg-sky px-4 py-2 rounded-[4px] text-sm ml-4">
          WATCH LIST
        </button>
        <DrawerSection handleClose={handleClose} isOpen={isOpen}/>
      </div>
    </div>
  );
};

export default Nav;
