import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between px-10 mt-5 max-sm:hidden">
      <button className="border-sky border px-20 hover:bg-sky hover:text-black font-bold duration-300 rounded-md py-2">
        24 Hours
      </button>
      <button className="border-sky border px-20 hover:bg-sky hover:text-black font-bold duration-300 rounded-md py-2">
        30 Days
      </button>
      <button className="border-sky border px-20 hover:bg-sky hover:text-black font-bold duration-300 rounded-md py-2">
        3 Months
      </button>
      <button className="border-sky border px-20 hover:bg-sky hover:text-black font-bold duration-300 rounded-md py-2">
        1 Year
      </button>
    </div>
  );
};

export default Buttons;
