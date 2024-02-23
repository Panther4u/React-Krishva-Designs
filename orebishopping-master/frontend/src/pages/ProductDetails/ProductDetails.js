import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300 ">
      <div className="mx-auto ">
        <div className="xl:-mt-10 -mt-7 px-1">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full flex md:flex-row xl:flex-row lg:flex-row sm:flex-col  gap-8 h-full -mt-5 xl:-mt-8 pb-10 p-2">
          {/* <div className="h-full mr-5 mb-3">
            <ProductsOnSale />
          </div> */}
          <div className="h-full xl:col-span-1">
            <img
              className=" w-[1000px] h-full object-cover rounded-md"
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full  flex flex-col gap-6 justify-center md:mt-4 sm:mt-4">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="h-full mb-3">
            <ProductsOnSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
