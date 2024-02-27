import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { FaWhatsapp } from "react-icons/fa";
import isMobile from "https://cdn.skypack.dev/ismobilejs";


function contactMe() {
  const buildUrl = (message) => {
      const system = isMobile().phone ? 'api' : 'web';
      const number = '8668054205';
      const url = `https://${system}.whatsapp.com/send?phone=+91${number}&text=${message}`;

      return url;
  };

  const msg = encodeURI('Hello! I would like to connect.');
  const href = buildUrl(msg);
}

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
        <a onClick={contactMe} className="w-52 h-10 gap-2 rounded-md text-white hover:bg-black duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
            <FaWhatsapp className="text-2xl"/>
            Buy On WhatsApp
        </a>

      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> bloues, chudi, lehenga, kids Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
