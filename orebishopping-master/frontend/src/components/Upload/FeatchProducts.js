import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/home/Products/Product'; // Import the Product component

function ProductList() {
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

    return (
        <div>
            <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
            Products on sale
            </h3>
            <div className="grid grid-cols-3 gap-4">
                {/* Loop through the products array and render each product using the Product component */}
                {products.map(product => (
                <Product
                    key={product._id}
                    productName={product.title}
                    productDescription={product.category}
                    img={`http://localhost:8000/images/${product.image}`}
                    // Add other product data props as needed
                />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
