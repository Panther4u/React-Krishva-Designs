import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
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
            <Product
              _id="100001"
              img={newArrOne}
              productName= "Aari Work Blouse Design"
              price= "44.00"
              color= "Black"
              badge= {true}
              des= "Beautiful Aari Work – Bridal Work . We design awesome Aari and bridal work blouses in your blouse material. This is not ready made, We do the same design on your preferred material, either we buy or you can provide your blouse material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
            />
          </div>
          <div className="px-2 max-w-80 max-h-80">
            <Product
              _id="100002"
              img={newArrTwo}
              productName= "Chudidhar Material Design"
              price= "250.00"
              color= "Black"
              badge= {true}
              des= "Beautiful Chudidhar stitching Work. We design awesome chudidhar dress stitching work in your dress material. We do the same design on your preferred material, either we buy or you can provide your chudidhar dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
            />
          </div>
          <div className="px-2 max-w-80 max-h-80">
            <Product
              _id="100003"
              img={newArrThree}
              productName= "Aari Work Blouse Design"
              price= "80.00"
              color= "Mixed"
              badge= {true}
              des= "Beautiful Aari Work – Bridal Work . We design awesome Aari and bridal work blouses in your blouse material. This is not ready made, We do the same design on your preferred material, either we buy or you can provide your blouse material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
            />
          </div>
          <div className="px-2 max-w-80 max-h-80">
            <Product
              _id="100004"
              img={newArrFour}
              productName= "Pattu Pavadai Material Design"
              price= "60.00"
              color= "Mixed"
              badge= {false}
              des= "Beautiful pattu pavadai stitching Work . We design awesome pattu pavadai dress stitching work in your dress material. We do the same design on your preferred material, either we buy or you can provide your pattu pavadai dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
            />
          </div>
          <div className="px-2 max-w-80 max-h-80">
            <Product
              _id="100005"
              img={newArrTwo}
              productName= "Chudidhar Material Design"
              price= "250.00"
              color= "Black"
              badge= {true}
              des= "Beautiful Chudidhar stitching Work. We design awesome chudidhar dress stitching work in your dress material. We do the same design on your preferred material, either we buy or you can provide your chudidhar dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
            />
          </div>
        </Slider>
      </div>

    </div>
  );
};

export default NewArrivals;
