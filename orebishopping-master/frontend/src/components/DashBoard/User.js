// import React from 'react';
import img1 from "../../assets/images/blouse/aari blouse/aariblouseOne.webp"
import img2 from "../../assets/images/chudidhar/chudidharTwo.webp"
// function UserDashBoard() {

//     return (
//         <>
//             <div className="md:w-auto sm:w-full mt-8   flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-auto  lg:block ">
//                 <div className="text-xs text-gray-400 tracking-wider">ADMIN PANEL</div>
//                 <div className="relative mt-4    z-n1">
//                 <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
//                 <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx={11} cy={11} r={8} />
//                     <line x1={21} y1={21} x2="16.65" y2="16.65" />
//                 </svg>
//         </div>
//                 <div className=" mt-5 flex  grid  md:grid-cols-3 lgl:grid-cols-3 sm:grid-cols-2  xl:grid-cols-4 gap-5 ">
//                     <button className="bg-white p-3 w-full  flex flex-col rounded-md dark:bg-gray-200 shadow">
//                         <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-gray-900 pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
//                         <img src={img1} className="w-7 h-7 mr-2 rounded-full" alt="profile" />
//                         Blouse Design
//                         </div>
//                         <div className="flex items-center w-full">
//                         <div className="text-xs py-1 px-2 leading-none dark:bg-gray-300 bg-blue-100 text-blue-500 rounded-md">Design</div>
//                         <div className="ml-auto text-xs text-gray-500">$1,902.00</div>
//                         </div>
//                     </button>
//                     <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-200 shadow">
//                         <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-gray-900 pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
//                         <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
//                         Chudi Design
//                         </div>
//                         <div className="flex items-center w-full">
//                         <div className="text-xs py-1 px-2 leading-none dark:bg-gray-300 bg-green-100 text-green-600 rounded-md">Sales</div>
//                         <div className="ml-auto text-xs text-gray-500">$2,794.00</div>
//                         </div>
//                     </button>
//                     <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-200 shadow">
//                         <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-gray-900  pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
//                         <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
//                         Lehenga Design
//                         </div>
//                         <div className="flex items-center w-full">
//                         <div className="text-xs py-1 px-2 leading-none dark:bg-gray-300 bg-yellow-100 text-yellow-600 rounded-md">Marketing</div>
//                         <div className="ml-auto text-xs text-gray-400">$0.00</div>
//                         </div>
//                     </button>
//                     <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-200 shadow">
//                         <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-gray-900  pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
//                         <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
//                         Kids Design
//                         </div>
//                         <div className="flex items-center w-full">
//                         <div className="text-xs py-1 px-2 leading-none dark:bg-gray-300 bg-blue-100 text-blue-500 rounded-md">Design</div>
//                         <div className="ml-auto text-xs text-gray-500">$762.00</div>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//     </>
//     )
// }

// export default UserDashBoard;
import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductBanner = ({ }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategoryCounts();
  }, [selectedCategory, currentPage]); // Re-fetch products when the selected category or current page changes

  const fetchProducts = async () => {
    try {
      setLoading(true); // Set loading state to true before fetching
      let response;
      if (selectedCategory === 'All') {
        response = await axios.get('http://localhost:8000/products');
      } else {
        response = await axios.get(`http://localhost:8000/products/${selectedCategory}`);
      }
      setProducts(response.data);
      setLoading(false); // Set loading state to false after fetching
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false); // Set loading state to false if there's an error
    }
  };

  const fetchCategoryCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/categoryCounts');
      setCategoryCounts(response.data);
    } catch (error) {
      console.error('Error fetching category counts:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const blouseDesign = selectedCategory === 'blouse design' ? products : products.filter(product => product.category === 'blouse design');
  const chudiDesign = selectedCategory === 'chudi design' ? products : products.filter(product => product.category === 'chudi design');
  const lehengaDesign = selectedCategory === 'lehenga design' ? products : products.filter(product => product.category === 'lehenga design');
  const kidsDesign = selectedCategory === 'kids design' ? products : products.filter(product => product.category === 'kids design');

  return (
    <>
      {/* Category select dropdown */}
      <div className="md:w-auto sm:w-full mt-1 flex-shrink-0  border-gray-200 dark:border-gray-800 h-auto lg:block  py-4">
        <div className="font-titleFont text-center  text-lg font-semibold py-3 underline underline-offset-4 decoration-[1px]">ADMIN PANEL</div>
        <div className="mt-5 flex grid md:grid-cols-2 lgl:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4 gap-3">
          <button
            className="bg-white  px-4 py-3 w-full h-full  rounded-md rounded-md bg-white shadow">
            <div className="flex items-center">
              <img src={img1} className="w-20  h-20 ml-2 rounded-full" alt="profile" />
              <div className=" w-full h-full ml-14">
                <div className="mb-2 text-gray-800 text-end text-md font-semibold">Blouse Design</div>
                <div className="ml-auto text-md font-semibold text-green-500  text-end">+ {blouseDesign.length}</div>
              </div>
            </div>
          </button>
          <button
            className="bg-white  px-4 py-3 w-full h-full  rounded-md rounded-md bg-white shadow">
            <div className="flex items-center">
            <img src={img2} className="w-20  h-20 ml-2 rounded-full" alt="profile" />
              <div className=" w-full h-full ml-14">
                <div className="mb-2 text-gray-800 text-end text-md font-semibold">Chudi Design</div>
                <div className="ml-auto text-md font-semibold text-green-500 text-end">+ {chudiDesign.length}</div>
              </div>
            </div>
          </button>
          <button
            className="bg-white  px-4 py-3 w-full h-full  rounded-md rounded-md bg-white shadow">
            <div className="flex items-center">
              <img src={img1} className="w-20  h-20 ml-2 rounded-full" alt="profile" />
              <div className=" w-full h-full ml-14">
                <div className="mb-2 text-gray-800 text-end text-md font-semibold">Lehenga Design</div>
                <div className="ml-auto text-md font-semibold text-green-500 text-end">+ {lehengaDesign.length}</div>
              </div>
            </div>
          </button>
          <button
            className="bg-white  px-4 py-3 w-full h-full  rounded-md rounded-md bg-white shadow">
            <div className="flex items-center">
            <img src={img1} className="w-20  h-20 ml-2 rounded-full" alt="profile" />
              <div className=" w-full h-full ml-14">
                <div className="mb-2 text-gray-800 text-end text-md font-semibold">Kids Design</div>
                <div className="ml-auto text-md font-semibold text-green-500 text-end">+ {kidsDesign.length}</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
