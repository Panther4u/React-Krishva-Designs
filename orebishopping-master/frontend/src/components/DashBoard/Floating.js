import React from 'react'
import { Link } from 'react-router-dom';


function Floating(){
    return(
        <>
        <div className="container ">
        <input type="checkbox" id="toggle" defaultChecked />
        <label className="button" htmlFor="toggle" />
        <nav className="nav dark:bg-gray-200 shadow bg-white ">
            <ul>
            <Link to="/adminDashboard">DashBoard</Link>
            <Link to="/addproduct">AddProduct</Link>
            <Link to="">Hire Me</Link>
            <Link to="">Subscribe</Link>
            </ul>
        </nav>
        </div>

        </>
    )
}

export default Floating;