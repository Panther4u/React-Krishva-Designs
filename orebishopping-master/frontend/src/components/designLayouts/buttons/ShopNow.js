import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ShopNow = () => {
  return (
    <div className="col-span-5 mdl:col-span-3 flex items-center justify-around  py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <a href="https://web.whatsapp.com/" className="w-52 h-10 gap-2 text-white hover:bg-black duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
            <FaWhatsapp className="text-2xl"/>
            Buy On WhatsApp
        </a>
    </div>
  );
};

export default ShopNow;
