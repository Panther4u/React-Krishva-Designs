import axios from "../../axios";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../src/assets/images/logo.png";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const addProduct = (e) => {
        e.preventDefault();

        // Send product data to the backend
        axios
        .post("http://localhost:8000/products/add", { title, imageURL, category, description })
        .then(() => {
            // Reset form fields after successful addition
            setTitle("");
            setImageURL("");
            setCategory("");
            setDescription("");
            alert("Product added successfully!");
        })
        .catch((error) => {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please try again.");
        });
    };
    return (
        <Container>
        <Logo>
            <img src={logo} alt="" />
        </Logo>

        <FormContainer>
            <h3>Add Product</h3>

            <InputContainer>
            <p>Title</p>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            </InputContainer>
            <InputContainer>
            <p>ImageURL</p>
            <input
                type="text"
                onChange={(e) => setImageURL(e.target.value)}
                value={imageURL}
            />
            </InputContainer>
            <InputContainer>
            <p>Category</p>
            <select onChange={(e) => setCategory(e.target.value)}
                value={category} class="form-select" aria-label="Default select example">
                <option selected>Blouse Design</option>
                <option value="chudi design">Chudi Design</option>
                <option value="lehenga design">Lehenga Design</option>
                <option value="kids design">Kids Design</option>
            </select>
            </InputContainer>
            <InputContainer>
            <p>Description</p>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            </InputContainer>
            <Button onClick={addProduct}>Add Product</Button>
        </FormContainer>
        </Container>
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

    input {
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
