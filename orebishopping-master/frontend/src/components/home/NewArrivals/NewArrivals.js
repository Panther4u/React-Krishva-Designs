import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";

const NewArrivals = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
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
      <Heading heading="New Arrivals" />
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

export default NewArrivals;
