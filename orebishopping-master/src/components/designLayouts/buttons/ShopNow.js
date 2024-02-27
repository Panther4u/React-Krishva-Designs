import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ShopNow = () => {
  return (
    <div className="col-span-5 mdl:col-span-3 flex items-center justify-around  py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
      <button className="w-52 h-10 gap-2 rounded-md text-white hover:bg-black duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
          <FaWhatsapp className="text-2xl"/>
          Buy On WhatsApp
      </button>
    </div>
  );
};

export default ShopNow;
