import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  // const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-white relative mt-2">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row  sm:flex-row md:flex-row items-start lg:items-center lg:px-10 justify-between w-full  lg:pb-0 h-full lg:h-20 ">
          {/* <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor px-1"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal sm:hidden lg:visible">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-16 mt-2 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/offer">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                    Blouse Design
                  </li>
                </Link>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                  Chudi Design
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                  Lehenga Design
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                  Kids Design
                </li>
              </motion.ul>
            )}
          </div> */}
          <div className="sm:ml-4 sm:mr-4 sm:mt-1.5 sm:mb-1.5 relative w-full lg:w-[600px] h-[50px] sm:h-[40px] text-base text-primeColor bg-white flex items-center justify-between px-4 rounded-md shadow-md">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 px-3 rounded-md bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24 rounded-md" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg sm:text-sm">
                          {item.productName}
                        </p>
                        {/* <p className="text-xs mr-4">{item.des}</p> */}
                        {/* <p className="text-sm">
                          Price: {" "}
                          <span className="text-primeColor font-semibold">
                            Rs.{item.price}/-
                          </span>
                        </p> */}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex sm:mt-4 lg:mt-0 items-center  cursor-pointer ml-3 mr-2 relative ">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-9 rounded-md z-50  shadow-xl w-44 text-black h-auto p-4 pb-6 right-0 bg-gray-100"
              >
                <Link to="/signin">
                  <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-200 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-200 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-200 hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                  Profile
                </li>
                <li className="text-gray-600 px-4 py-1 border-b-[1px] border-b-gray-200  hover:border-b-gray-400 hover:text-gray-400 duration-300 cursor-pointer">
                  Others
                </li>
              </motion.ul>
            )}
            {/* <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link> */}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;



