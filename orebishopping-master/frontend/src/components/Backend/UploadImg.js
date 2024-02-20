import React, { useState } from 'react';
import axios from "axios";

const ImageForm = () => {

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
    );
}

export default ImageForm;