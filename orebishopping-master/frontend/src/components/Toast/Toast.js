import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


const App = () => {
    
    // Default
    const DefaultNotify = () => toast('Here is your toast.');
  
    // Success
    const SuccessNotify = () => toast.success('Successfully toasted!')
  
    // Error
    const ErrorNotify = () => toast.error("This didn't work.")
  
    // Promise
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log({ response });
      return response;  
    };
    
    const PromiseNotify = () =>  toast.promise(
      fetchData(),
      {
        loading: 'loading...',
        success: 'Successfully get data',
        error: "error occurs in data",
      }
    );
  
  
  
    // Emoji or icon
    const IconNotify = () => toast('Good Job!', {
      icon: '👏',
    });
    
    
  
    
    return (
        <React.Fragment>
            <div className="row m-0 justify-content-center">
                <div className="col-md-10 mt-5 mb-5">
                    <div className="form-area">
                        <div className="form-inner">
                            <h4 className="form-heading mb-4 text-primary text-center">React Hot Toast</h4>
                            <div className="d-flex pt-5 align-items-center justify-content-between">
                              <button onClick={DefaultNotify} className="btn btn-sm btn-secondary">Default</button>
                              <button onClick={SuccessNotify} className="btn btn-sm btn-success">Success</button>
                              <button onClick={ErrorNotify} className="btn btn-sm btn-danger">Error</button>
                              <button onClick={PromiseNotify} className="btn btn-sm btn-primary">Promise</button>
                              <button onClick={IconNotify} className="btn btn-sm btn-warning">Emoji Icon</button>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Toaster  position="top-right" />
        </React.Fragment>
    );
}


ReactDOM.render(< App />, document.getElementById("root"));