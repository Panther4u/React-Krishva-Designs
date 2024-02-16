// import React from "react";
// import { ImCross } from "react-icons/im";
// import { useDispatch } from "react-redux";
// import {
//   deleteItem
// } from "../../redux/orebiSlice";
// import { FaWhatsapp } from "react-icons/fa";

// const ItemCard = ({ item }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="w-full grid grid-cols-5 mb-4 border py-2 justify-around">
//       <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
//         <ImCross
//           onClick={() => dispatch(deleteItem(item._id))}
//           className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
//         />
//         <img className="w-32 h-32" src={item.image} alt="productImage" />
//         <h1 className="font-titleFont font-semibold">{item.name}</h1>
//       </div>
//       <div className="col-span-5 mdl:col-span-3 flex items-center justify-around  py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
//         <a href="https://web.whatsapp.com/" className="w-52 h-10 gap-2 rounded-md text-white hover:bg-black duration-300 flex items-center justify-center" style={{backgroundColor : '#128C7E'} }>
//             <FaWhatsapp className="text-2xl"/>
//             Buy On WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;
