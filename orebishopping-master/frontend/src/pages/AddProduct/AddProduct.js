import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../src/assets/images/logo.png';
import ProductList from '../../components/Upload/FeatchProducts';
import { motion } from "framer-motion";

function AddProduct() {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const addProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);

        axios.post('http://localhost:8000/products/add', formData)
        .then(() => {
            setTitle('');
            setFile(null);
            setCategory('');
            setDescription('');
            alert('Product added successfully!');
        })
        .catch((error) => {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        });
    };

    const handleUpload = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <>
         <>
            <Logo>
                <img src={logo} alt="" />
            </Logo>

            <FormContainer>
                <h3>Add Product</h3>

                <InputContainer>
                <p>Product Name</p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </InputContainer>

                <InputContainer>
                <p>Product Image</p>
                <div>
                    <input
                    type="file"
                    onChange={handleUpload}
                    />
                </div>
                </InputContainer>

                <InputContainer>

                <p>Product Category</p>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}> 
                    <option value="">Select category</option>
                    <option value="blouse design">Blouse Design</option>
                    <option value="chudi design">Chudi Design</option>
                    <option value="lehenga design">Lehenga Design</option>
                    <option value="kids design">Kids Design</option>
                </select>
{/* 
                <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Select Category{" "}
                        <span value={category}
                    onChange={(e) => setCategory(e.target.value)} className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-2"
                        >
                          <li className="">Blouse Design</li>
                          <li className="">Chudi Design</li>
                          <li className="">Lehenga Design</li>
                          <li className="">Kids Design</li>
                          <li className="">Others</li>
                        </motion.ul>
                      )}
                    </div> */}
                </InputContainer>

                <InputContainer>
                <p>Description</p>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </InputContainer>

                <Button onClick={addProduct}>Add Product</Button>
            </FormContainer>
            </>

            <ProductList/>
            </>

    );
    }

    const Container = styled.div`
    width: 40%;
    min-width: 450px;
    height: fit-content;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    const Logo = styled.div`
    width: 120px;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
    `;

    const FormContainer = styled.form`
    border: 1px solid lightgray;
    width: 55%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    h3 {
        font-size: 28px;
        font-weight: 400;
        line-height: 33px;
        align-self: flex-start;
        margin-bottom: 10px;
    }
    `;

    const InputContainer = styled.div`
    width: 100%;
    padding: 10px;

    p {
        font-size: 14px;
        font-weight: 600;
    }

    input, select {
        width: 95%;
        height: 33px;
        padding-left: 5px;
        border-radius: 5px;
        border: 1px solid lightgray;
        margin-top: 5px;

        &:hover {
        border: 1px solid orange;
        }
    }
    `;

    const Button = styled.button`
    width: 70%;
    height: 35px;
    background-color: #f3b414;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
    `;

    export default AddProduct;
