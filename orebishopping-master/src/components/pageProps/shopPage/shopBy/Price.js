import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 399.99,
    },
    {
      _id: 951,
      priceOne: 399.0,
      priceTwo: 799.99,
    },
    {
      _id: 952,
      priceOne: 799.0,
      priceTwo: 1399.99,
    },
    {
      _id: 953,
      priceOne: 1399.0,
      priceTwo: 1999.99,
    },
    {
      _id: 954,
      priceOne: 1999.0,
      priceTwo: 3999.99,
    },
    {
      _id: 955,
      priceOne: 3999.0,
      priceTwo: 9999.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-xs lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              Rs.{item.priceOne.toFixed(2)} - Rs.{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
