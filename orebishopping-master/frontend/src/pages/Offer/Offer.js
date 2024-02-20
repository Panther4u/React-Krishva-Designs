import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import BestSellers from "../../components/home/BestSellers/BestSellers";


const Offer = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="pb-10">
        <BestSellers/>
      </div>
    </div>
  );
};

export default Offer;
