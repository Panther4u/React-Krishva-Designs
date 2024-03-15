import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 18000); // Change the interval as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, [currentIndex, products]);

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);


  return (
    <div className="w-full pb-8">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-2 xl:grid-cols-5">
        {visibleProducts.map((product) => (
          <Product
            key={product._id}
            productName={product.title}
            price={product.price}
            discount={product.discount}
            img={`http://localhost:8000/images/${product.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;


