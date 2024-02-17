import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
// import {
//   newArrOne,
//   newArrTwo,
//   newArrThree,
//   newArrFour,
// } from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";

const NewArrivals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/products")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-10 pt-5">
      <Heading heading="New Arrivals" />
      <div className="w-full grid sm:grid-cols-1 text-center">
        <Slider {...settings}>
          <div className="px-2 max-w-80 max-h-80">
            {items.map(item => (
              <Product
              _id={item._id}
              img={item.img[0]}
              badge={true}
              des={item.des}
              />
            ))}
          </div>

        </Slider>
      </div>

    </div>
  );
};

export default NewArrivals;
