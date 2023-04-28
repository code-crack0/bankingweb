import React from "react";
import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { Chip } from "@mui/material";
const Monthlycredits = () => {
    const handlePay = () => {
        alert("Payment Successful");
    };

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Monthly Credits</h1>
      <ul>
        {data.map((order) => (
          <li
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <BiTransfer className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">{order.title}</p>
              <p className="text-gray-400 text-sm">{order.total}</p>
            </div>
                <p className="lg:flex md:hidden absolute right-6 text-sm">
                    {order.autopay ? <Chip label="AutoPay" color="primary" /> : <Chip label="Clickable" variant="outlined" color="primary" onClick={handlePay} />}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Monthlycredits;
