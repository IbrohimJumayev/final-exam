import React from "react";
import { Drawer } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/slices/SelectedSlice";

const DrawerSection = ({ handleClose, isOpen }) => {
  const selectedCoins = useSelector((state) => state.selected.selected);
  const dispatch = useDispatch();
  return (
    <div>
      <Drawer
        className="bg-[#515151] w-[511px]"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header title="WATCHLIST" />
        <Drawer.Items className="grid grid-cols-2 gap-10 px-">
          {selectedCoins == "" ? (
            <p className=" text-3xl font-bold text-sky mt-10 ">
              No coins were selected.
            </p>
          ) : (
            selectedCoins.map((s) => (
              <div
                key={s.id}
                className="bg-[#14161A] py-6 rounded-3xl text-center"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="w-[110px] h-[110px] object-cover"
                    src={s.image}
                    alt={s.name}
                  />
                </div>

                <p className="text-white mt-2">
                  {s.current_price.toLocaleString()}
                </p>
                <button
                  onClick={() => dispatch(remove(s.id))}
                  className="mt-2  text-white py-1 px-3 bg-[#FF0000] "
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
