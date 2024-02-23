// import React from "react";
// import { SplOfferData } from "../../../constants";

// const ProductsOnSale = () => {
//   return (
//     <div>
//       <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
//         Products on sale
//       </h3>
//       <div className="flex flex-col gap-2">
//         {SplOfferData.map((item) => (
//           <div
//             key={item._id}
//             className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
//           >
//             <div>
//               <img className="w-24" src={item.img} alt={item.img} />
//             </div>
//             <div className="flex flex-col gap-2 font-titleFont">
//               <p className="text-base font-medium">{item.productName}</p>
//               <p className="text-sm font-semibold">${item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsOnSale;

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from "axios";
import SampleNextArrow from '../../home/NewArrivals/SampleNextArrow';
import SamplePrevArrow from '../../home/NewArrivals/SamplePrevArrow';
import Heading from '../../home/Products/Heading';
import Product from '../../home/Products/Product';

const ProductsOnSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      // Function to fetch products from the backend
      const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:8000/products');
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching products:', error);
      }
      };

      // Call the fetchProducts function when the component mounts
      fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Heading heading="Related Products" />
      <Slider {...settings}>
        {products.map(product => (
                <Product
                    key={product._id}
                    productName={product.title}
                    price={product.price}
                    discount={product.discount}
                    img={`http://localhost:8000/images/${product.image}`}
                    // Add other product data props as needed
                />
        ))}
      </Slider>
    </div>
  );
};

export default ProductsOnSale;
