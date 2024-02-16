import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  xl:grid-cols-4 gap-5">
        <Product
          _id="1101"
          img={spfOne}
          productName= "Lehanga Material Design"
          price= "35.00"
          color= "Blank and White"
          badge= {true}
          des= "Beautiful lehanga material stitching Work . We design awesome lehanga dress stitching work in your dress material.We do the same design on your preferred material, either we buy or you can provide your lehanga dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName= "Chudidhar Material Design"
          price= "180.00"
          color= "Gray"
          badge= {true}
          des= "Beautiful Chudidhar stitching Work. We design awesome chudidhar dress stitching work in your dress material. We do the same design on your preferred material, either we buy or you can provide your chudidhar dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName= "Normal Work Blouse Design"
          price= "25.00"
          color= "Mixed"
          badge= {true}
          des= "Beautiful normal Work. We design normal work blouses in your blouse material. This is not ready made, We do the same design on your preferred material, either we buy or you can provide your blouse material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName= "Pattu Pavadai Material Design"
          price= "220.00"
          color= "Black"
          badge= {true}
          des= "Beautiful pattu pavadai stitching Work . We design awesome pattu pavadai dress stitching work in your dress material. We do the same design on your preferred material, either we buy or you can provide your pattu pavadai dress material You want any change in the colors or design? No Issues, Just whatsapp. We are call you back to confirm the design details. You shall discuss the color changes or any specific designs changes. Then We shall confirm the design and cost for that before we schedule for pickup."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
