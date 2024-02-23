import axios from 'axios';
import React, { useState } from 'react';
import ProductList from '../../components/Upload/FeatchProducts';
import toast from 'react-hot-toast';


function AddProduct() {
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');


    const addProduct = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', id);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('category', category);
        formData.append('description', description);
    
        // Show loading toast message
        const loadingToast = toast.loading('Adding product...');
    
        try {
          // Set a timeout for the axios request
          const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('Timeout exceeded'));
            }, 10000); // Adjust timeout duration as needed (e.g., 10 seconds)
          });
    
          // Send the axios request and race it with the timeout promise
          await Promise.race([axios.post('http://localhost:8000/products/add', formData), timeoutPromise]);
    
          // Dismiss the loading toast
          toast.dismiss(loadingToast);
    
          // Show success toast message
          toast.success('Product added successfully!');
    
          // Reset form fields after a delay
          setTimeout(() => {
            setID('');
            setTitle('');
            setPrice('');
            setFile(null);
            setCategory('');
            setDescription('');
            setDiscount(0);
          }, 3000); // Adjust the delay time as needed
        } catch (error) {
          // Dismiss the loading toast
          toast.dismiss(loadingToast);
    
          if (error.message === 'Timeout exceeded') {
            // Handle timeout error
            toast.error('Request timed out. Please try again.');
          } else {
            // Handle other errors
            console.error('Error adding product:', error);
            toast.error('Failed to add product. Please try again.');
          }
        }
      };
    const handleUpload = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDiscountChange = (e) => {
        const discountValue = parseFloat(e.target.value);
        // Check if the entered value is a valid number
        if (!isNaN(discountValue)) {
          // Limit the discount value to be between 0 and 100
          if (discountValue >= 0 && discountValue <= 100) {
            setDiscount(discountValue);
          }
        }
      };

    
    return (

        <>
            <div className="w-full h-auto flex xl:flex-col lg:flex-col md:flex-col sm:flex-col py-10 right-0 items-center top-0">
                <form  className="w-full lgl:w-[550px] md:w-[500px] h-auto flex items-center justify-center">
                    <div className="px-6 py-4 w-full h-auto flex flex-col items-center justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                        <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 ">
                            Add Product
                        </h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-.5">
                            <p className="font-titleFont text-base font-semibold text-gray-600">
                            Product ID
                            </p>                   
                            <input
                            type="text"
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                            placeholder="Enter Product id"
                            />                          
                            </div>

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                Product Name
                                </p>                   
                                <input
                                type="text"
                                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter Product title"
                                />                          
                            </div>

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                Price
                                </p>                   
                                <input
                                type="number"
                                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                placeholder="Enter Price"
                                />                       
                            </div>

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                    Discount Price (%)
                                </p>
                                <input
                                    type="number"
                                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                    onChange={handleDiscountChange}
                                    value={discount}
                                    placeholder="Enter Discount"
                                />
                            </div>                   

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                Product Category
                                </p>                   
                                <select
                                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}> 
                                    <option value="">Select category</option>
                                    <option value="blouse design">Blouse Design</option>
                                    <option value="chudi design">Chudi Design</option>
                                    <option value="lehenga design">Lehenga Design</option>
                                    <option value="kids design">Kids Design</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                Description
                                </p>                   
                                <input
                                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter Description"
                                />                          
                            </div>

                            <div className="flex flex-col gap-.5">
                                <p className="font-titleFont text-base font-semibold text-gray-600">
                                Product Image
                                </p> 
                                <div className="">
                                <label htmlFor="formFileMultiple" className="form-label border-none"></label>
                                <input className="form-control w-full h-8 placeholder:text-sm placeholder:tracking-wide  text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none " type="file" id="formFileMultiple" multiple onChange={handleUpload} />
                                </div>
                            </div>

                            <button
                                onClick={addProduct}
                                type="submit"
                                className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300 mt-3">
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
                <ProductList/>
            </div>
        </>

        
    );
    }

    export default AddProduct;
