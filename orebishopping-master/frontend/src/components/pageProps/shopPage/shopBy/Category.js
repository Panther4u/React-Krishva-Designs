// import React, { useState } from "react";
// // import { FaPlus } from "react-icons/fa";
// import { ImPlus } from "react-icons/im";
// import NavTitle from "./NavTitle";

// const Category = () => {
//   const [showSubCatOne, setShowSubCatOne] = useState(false);
//   const items = [
//     {
//       _id: 990,
//       title: "Blouse Design",
//       icons: true,
//     },
//     {
//       _id: 991,
//       title: "Chudi Design",
//     },
//     {
//       _id: 992,
//       title: "Lehenga Design",
//       icons: true,
//     },
//     {
//       _id: 993,
//       title: "Kids Design",
//     },
//     {
//       _id: 994,
//       title: "New Arrivals",
//     },
//   ];
//   return (
//     <div className="w-full">
//       <NavTitle title="Shop by Category" icons={false} />
//       <div>
//         <ul className="flex flex-col gap-4 text-xs lg:text-base text-[#767676]">
//           {items.map(({ _id, title, icons }) => (
//             <li
//               key={_id}
//               className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
//             >
//               {title}
//               {icons && (
//                 <span
//                   onClick={() => setShowSubCatOne(!showSubCatOne)}
//                   className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
//                 >
//                   <ImPlus />
//                 </span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Category;
