import axios from "../axios";
import React, { useState } from "react";
import styled from "styled-components";


function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = (e) => {
    e.preventDefault();

    // Send product data to the backend
    axios
    .post("http://localhost:8000/products/add", { title, imageURL, price, rating })
    .then(() => {
        // Reset form fields after successful addition
        setTitle("");
        setImageURL("");
        setPrice(0);
        setRating(0);
        alert("Product added successfully!");
    })
    .catch((error) => {
        console.error("Error adding product:", error);
        alert("Failed to add product. Please try again.");
    });
};

const [file, setFile] = useState(null);
    // const [imgFile, setImgFile] = useState('');


    const handleFileChange = (event) => {
        setFile(event.target.files);
        console.log(file)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        for(var x = 0; x<file.length; x++) {
            data.append('file', file[x])
        }
        axios.post("http://localhost:8000/upload", data)
        .then(res => { 
            setImgFile('http://localhost:8000/public/images/'+res.data.filename)
            console.log(res.statusText)
        })
    }
  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="" />
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
          <div>
            <form >
                <div className="form-group" >

                    <label htmlFor="file">Upload File:</label>
                    <input 
                    className="form-control-file mb-3" 
                    type="file" id="file" 
                    accept=".jpg"
                    multiple
                    onChange={handleFileChange}
                    />

                    <button 
                    className="btn btn-primary mt-3" 
                    onClick={handleSubmit}
                    >Upload</button>
                </div>
            </form>

              <ul>
              <img src={file} alt="img"/>
              {/* app.use('/public/images', express.static(__dirname + '/public/images/')); */}
              </ul>
            {/* Display Image Here */}
          </div>
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
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
