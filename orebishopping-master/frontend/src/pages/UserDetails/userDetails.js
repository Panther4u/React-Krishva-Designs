import React, { useEffect, useState } from "react";
// import Dashboard from "../Dashboard/adminDashboard";
// import UserHome from "../UserHome/userHome";



export default function UserDetails() {
    const [userData, setUserData] = useState(null); // Initialize userData as null initially
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/userData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data, "userData");
            if (data.data && data.data.role === "Admin") {
                setAdmin(true);
            }
            setUserData(data.data);
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            // Handle error here (e.g., show error message to user)
        });
    }, []);

    if (userData === null) {
        // Show loading indicator or skeleton component while userData is being fetched
        return <div>Loading...</div>;
    }

    // Redirect to sign-in page if userData indicates token expiration
    if (userData === "token expired") {
        alert("Token expired. Please log in again.");
        window.localStorage.clear();
        window.location.href = "./signin";
        return null;
    }

    window.location.href = admin ? "/adminDashboard" : "/";
}
