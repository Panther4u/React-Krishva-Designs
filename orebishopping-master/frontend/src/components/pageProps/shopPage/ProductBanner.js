import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]); // Re-fetch products when the selected category changes

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

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPageFromBanner) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };
  const currentItems = products.slice(itemOffset, itemOffset + itemsPerPageFromBanner);
  const pageCount = Math.ceil(products.length / itemsPerPageFromBanner);

  return (
    <>
      {/* Category select dropdown */}
      <div className="flex items-center gap-4 justify-end md:gap-6 mt-0 md:mt-0 px-4">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by Category:</label>
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            id="categories"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="All">All</option>
            <option value="blouse design">Blouse Design</option>
            <option value="chudi design">Chudi Design</option>
            <option value="lehenga design">Lehenga Design</option>
            <option value="kids design">Kids Design</option>
          </select>
        </div>
        {/* <div className="flex items-center gap-2 text-[#767676] relative px-2">
          <label className="block">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div> */}
      </div>

      {/* Product grid */}
      <div className="px-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-2  mdl:gap-2 lg:gap-1 sm:gap-1">
        {loading ? (
          <div>Loading...</div>
        ) : (
              products.map(product => (
                <Product
                    key={product._id}
                    productName={product.title}
                    price={product.price}
                    discount={product.discount}
                    img={`http://localhost:8000/images/${product.image}`}
                    // Add other product data props as needed
                />
        ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between lg:justify-center items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {Math.min(itemStart + itemsPerPageFromBanner, products.length)} of {products.length}
        </p>
      </div>
    </>
  );
};

export default ProductBanner;
