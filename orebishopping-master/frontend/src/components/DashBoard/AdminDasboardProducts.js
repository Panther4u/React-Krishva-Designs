import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDasboardProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products');
                setProducts(response.data.slice(-5)); // Display the last 6 products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };
    const truncateTitle = (title, maxLength) => {
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength) + '...';
    };

    return (
        <div className='bg-white w-full shadow mb-16 mt-16 rounded-md py-5'>
            <h3 className="font-titleFont text-center  text-lg font-semibold m-8 underline underline-offset-4 decoration-[1px]">
                Recently Added Product
            </h3>
            <table className="table-auto w-full bg-white">
                <thead>
                    <tr>
                        <th className="sm:text-xs  lg:text-lg md:text-md xl:text-xl px-1 py-2">Product Image</th>
                        <th className="sm:text-xs  lg:text-lg md:text-md xl:text-xl px-1 py-2">Product Name</th>
                        <th className="sm:text-xs  lg:text-lg md:text-md xl:text-xl px-1 py-2">Price</th>
                        <th className="sm:text-xs  lg:text-lg md:text-md xl:text-xl px-1 py-2">Discount</th>
                        <th className="sm:text-xs  lg:text-lg md:text-md xl:text-xl px-1 py-2">Description</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody className=''>
                    {/* Loop through the products array and render each product row */}
                    {products.map(product => (
                        <tr className='text-center gap-0' key={product._id}>
                            <td className="text-center py-3">
                                <img src={`http://localhost:8000/images/${product.image}`} alt={product.title} className=" h-14 w-14 items-center rounded-sm" />
                            </td>
                            <td className='sm:text-xs  lg:text-lg md:text-md xl:text-xl text-gray-450  '>{truncateTitle(product.title, 14)}</td>
                            <td className="sm:text-xs  lg:text-lg md:text-md xl:text-xl text-gray-450  px-1 py-2">{product.price}/-</td>
                            <td className="sm:text-xs  lg:text-lg md:text-md xl:text-xl text-gray-450   px-1 py-2">{product.discount}</td>
                            <td className='sm:text-xs  lg:text-lg md:text-md xl:text-xl text-gray-450  px-1 py-2'>{truncateDescription(product.description, 100)}</td>
                            {/* Add more table cells for additional product data */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDasboardProducts;
