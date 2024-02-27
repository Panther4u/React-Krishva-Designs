// import React from "react";
// // import { useDispatch } from "react-redux";
// // import { addToCart } from "../../../redux/orebiSlice";
// import { FaWhatsapp } from "react-icons/fa";

// const ProductInfo = ({ productInfo }) => {
//   // const dispatch = useDispatch();
//   return (
    // <div className="flex flex-col gap-5">
    //   <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
    //   <p className="text-xl font-semibold">{productInfo.category}</p>
    //   <p className="text-sm font-semibold"><del>Rs. {productInfo.price}</del></p>
    //   <p className="text-lg font-semibold">Rs. {productInfo.discount}</p>
    //   <p className="text-base text-gray-600">{productInfo.description}</p>
    //   <a href="https://web.whatsapp.com/" className="w-full rounded-md py-4 gap-2 text-white duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
    //         <FaWhatsapp className="text-2xl"/>
    //         Buy On WhatsApp
    //   </a>
    // </div>
//   );
// };

// export default ProductInfo;


// ProductInfo.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const ProductInfo = ({ product }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product.productName}</h2>
      <p className="text-xl font-semibold">{product.category}</p>
      <p className="text-sm font-normal"><del>Rs. {product.price} /-</del></p>
      <p className="text-lg font-semibold">Rs. {product.discount} /-</p>
      <p className="text-base text-gray-600">{product.description}</p>
      <a href="https://web.whatsapp.com/" className="w-full rounded-md py-4 gap-2 text-white duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
            <FaWhatsapp className="text-2xl"/>
            Buy On WhatsApp
      </a>
  </div>
  );
};

export default ProductInfo;
