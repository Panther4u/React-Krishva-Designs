import React from "react";
import Product from "../../../home/Products/Product";

function Items({ currentItems }) {
    return (
        <>
        {currentItems &&
            currentItems.map((item) => (
            <div key={item._id} className="w-full">
                <Product
                    key={product._id}
                    productName={product.title}
                    price={product.price}
                    discountedPrice={product.discount}
                    img={`http://localhost:8000/images/${product.image}`}
                    // Add other product data props as needed
                />
            </div>
            ))}
        </>
    );
}

export default Items;
