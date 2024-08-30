import React, { useState } from "react";
import { Divider } from "@mui/material";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoInfiniteSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openRegisterModel } from "../../../../features/auth/authSlice";
import { setValues } from "../../../../features/casino/plinkoSlice";

function PlinkoGameSidebar() {
  const dispatch = useDispatch();
  const [isManual, setIsManual] = useState(true);
  const values = useSelector((state) => state.plinkoGame.values);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  return (
    <div className="w-80 flex flex-col p-3 bg-[#213743] rounded-tl-lg">
      <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex space-x-2">
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
                isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
              }`}
              onClick={() => setIsManual(true)}
            >
              Manual
            </button>
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
                !isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
              }`}
              onClick={() => setIsManual(false)}
            >
              Auto
            </button>
          </div>
        </div>
      </div>
      {isManual ? (
        <div>
          <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
            <label>Bet Amount</label>
            <label>$0.00</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <div className="relative flex">
              <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                type="number"
                placeholder="0.00"
                min={0}
                name="betamount"
                value={values?.betamount}
                onChange={(e) => handleOnChange(e)}
                className="w-48 pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e]"
              />
            </div>
            <button className="w-16 text-xs hover:bg-[#5c849e68]">1/2</button>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
            />
            <button className="w-16 text-xs hover:bg-[#5c849e68]">2x</button>
          </div>
          <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1">
            <label>Risk </label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <select
              type="select"
              name="risk"
              value={values?.risk}
              onChange={(e) => handleOnChange(e)}
              className="w-full px-2 py-2 rounded-s-md text-white bg-[#0f212e]"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
            <label>Rows</label>
          </div>
          <div className="relative flex">
            <select
              type="select"
              name="rows"
              value={values?.rows}
              onChange={(e) => handleOnChange(e)}
              className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
            >
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
            </select>
          </div>
          <button
            className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full"
            onClick={() => {
              if (!localStorage.getItem("token")) {
                dispatch(openRegisterModel());
              }
            }}
          >
            Bet
          </button>
        </div>
      ) : (
        <div className="text-m">
          <div>
            <div className="text-[#b1bad3] flex justify-between font-semibold my-1">
              <label>Bet Amount</label>
              <label>$0.00</label>
            </div>
            <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  min={0}
                  name="betamount"
                  value={values?.betamount}
                  onChange={(e) => handleOnChange(e)}
                  className="w-48 pr-9 pl-2 py-2.5 rounded-s-md text-white bg-[#0f212e]"
                />
              </div>
              <button className="w-16 hover:bg-[#5c849e68]">1/2</button>
              <Divider
                flexItem
                orientation="vertical"
                sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
              />
              <button className="w-16 hover:bg-[#5c849e68]">2x</button>
            </div>
            <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1">
              <label>Risk </label>
            </div>
            <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
              <select
                type="select"
                name="risk"
                value={values?.risk}
                onChange={(e) => handleOnChange(e)}
                className="w-full px-2 py-2 rounded-s-md text-white bg-[#0f212e]"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
              <label>Rows</label>
            </div>
            <div className="relative flex">
              <select
                type="select"
                name="rows"
                value={values?.rows}
                onChange={(e) => handleOnChange(e)}
                className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
              >
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
              </select>
            </div>
            <div className="text-[#b1bad3] justify-between font-semibold mt-3 mb-1">
              <label>Number of Bets</label>
            </div>
            <div className="justify-between mb-2">
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <IoInfiniteSharp className="text-xl" />
                </div>
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbets"
                  value={values?.numberofbets}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full pr-7 pl-2 py-2.5 rounded-md  text-white bg-[#0f212e]"
                />
              </div>
            </div>
            <button
              className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full"
              onClick={() => {
                if (!localStorage.getItem("token")) {
                  dispatch(openRegisterModel());
                }
              }}
            >
              Start Autobet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlinkoGameSidebar;
