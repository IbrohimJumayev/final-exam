import React from "react";
import TitleCoin from "./TitleCoin";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import PaginationSection from "./Pagination";
import { add, remove } from "../../store/slices/SelectedSlice";
import { Link } from "react-router-dom";

const CoinList = ({ currentPage, setCurrentPage, loading }) => {
  const coins = useSelector((state) => state.coins.coins);
  const currency = useSelector((state) => state.coins.currency);
  const dispatch = useDispatch();
  const selectedCoins = useSelector((state) => state.selected.selected);

  const onPageChange = (page) => setCurrentPage(page);

  const isSelected = (id) => {
    return selectedCoins.some((s) => s.id === id);
  };

  const handlePrice = () => {
    if (currency == "usd") {
      return "$";
    } else if (currency == "rub") {
      return "₽";
    } else if (currency == "jpy") {
      return "¥";
    } else {
      return "$";
    }
  };

  const customTheme = {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "text-white px-6 py-3",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "px-6 py-3 text-black bg-sky p-4 ",
      },
    },
    row: {
      base: "group/row border-b-[1px] border-[#515151]",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  };

  return (
    <div>
      <TitleCoin />
      <div className="overflow-x-auto max-w-[1232px] m-auto mt-5 ">
        {loading ? (
          <Loading />
        ) : (
          <Table theme={customTheme}>
            <TableHead>
              <TableHeadCell>Coin</TableHeadCell>
              <TableHeadCell className="text-end">Price</TableHeadCell>
              <TableHeadCell className="text-end">24h Change</TableHeadCell>
              <TableHeadCell className="text-end max-sm:hidden">
                Market Cap
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {coins.map((c) => (
                <TableRow
                  key={c.id}
                  className="bg-[#16171A] border-[#515151] dark:bg-gray-800"
                >
                  <TableCell>
                    <div className="flex gap-4">
                      <img className="w-12 h-12" src={c.image} alt="" />
                      <div>
                        <Link to={`/${c.id}`}>
                          <p className="text-white text-[22px] font-robot">
                            {c.symbol.toUpperCase()}
                          </p>
                          <p className="text-[#A9A9A9] mt-[5px] text-sm font-robot">
                            {c.name}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-end">
                    <p className="text-white font-robot text-end">
                      {handlePrice()} {c.current_price.toLocaleString()}
                    </p>
                  </TableCell>
                  <TableCell className="text-end">
                    <div className="flex justify-end gap-4 items-center">
                      <span
                        onClick={
                          isSelected(c.id)
                            ? () => dispatch(remove(c.id))
                            : () => dispatch(add(c))
                        }
                        className={`material-symbols-outlined ${
                          isSelected(c.id) ? "text-[#75f94c]" : "text-white"
                        }  text-end cursor-pointer text-2xl`}
                      >
                        visibility
                      </span>
                      <p
                        className={`${
                          c.price_change_percentage_24h > 0
                            ? "text-[#0ECB81]"
                            : "text-[#FF0000]"
                        }
                    font-semibold text-sm
                    font-robot
                      
                    `}
                      >
                        {c.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-end max-sm:hidden">
                    <p className="text-white font-robot">
                      {handlePrice()}
                      {c.market_cap.toLocaleString()}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <PaginationSection
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CoinList;
