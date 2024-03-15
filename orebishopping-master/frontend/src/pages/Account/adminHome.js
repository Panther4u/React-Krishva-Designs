import React, { useEffect, useState } from "react";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminHome({ userData }) {
  // Setting state
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    useEffect(() => {
        getAllUser();
    }, []);

    // Fetching all users
    const getAllUser = () => {
        fetch("http://localhost:8000/getAllUser", {
        method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data.data);
        });
    };

    // Edit user
    const handleEdit = (index) => {
        setIsEditing(index);
    };

    // Save edited user
    const handleSave = (id, name, email, role, phone) => {
        fetch("http://localhost:8000/updateUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            clientName: name,
            email: email,
            role: role,
            phone: phone,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            setIsEditing(null);
            getAllUser(); // Reload the data after saving
            toast.success(`Successfully updated ${name}'s profile`);
        })
        .catch((error) => {
            console.error("Error saving user data:", error);
            toast.error("Error updating user");
        });
    };

    // Delete user
    const deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
        fetch("http://localhost:8000/deleteUser", {
            method: "POST",
            crossDomain: true,
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
            userid: id,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
            getAllUser(); // Reload user data first
            toast.success(`Successfully deleted ${name}'s profile`);
            })
            .catch((error) => {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user");
            });
        }
    };

    // Render edit or save button based on editing state
    const renderEditOrSaveButton = (index, id, name, email, role) => {
        if (index === isEditing) {
        return (
            <FontAwesomeIcon
            icon={faSave}
            onClick={() => handleSave(id, name, email, role, data[index].phone)} // Pass the phone number as an argument
            />
        );
        } else {
        return <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(index)} />;
        }
    };

    return (
        <div className="bg-white w-full shadow mb-2 py-5 mt-2 rounded-md">
            <h3 className="font-titleFont text-center  text-lg font-semibold py-8 underline underline-offset-4 decoration-[1px]">User Details</h3>
        <div>
            
            <table className="w-full border-collapse border-none">
            <thead className="sm:text-xs  lg:text-lg md:text-md xl:text-xl">
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => {
                return (
                    <tr className="text-center sm:text-xs  lg:text-lg md:text-md xl:text-xl" key={user._id}>
                    <td className="py-2">
                        {isEditing === index ? (
                        <input
                            className="w-full text-center"
                            type="text"
                            name="clientName"
                            value={user.clientName}
                            onChange={(e) =>
                            setData((prevState) => {
                                const newState = [...prevState];
                                newState[index].clientName = e.target.value;
                                return newState;
                            })
                            }
                        />
                        ) : (
                        user.clientName
                        )}
                    </td>
                    <td>
                        {isEditing === index ? (
                        <input
                            className="w-full text-center"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={(e) =>
                            setData((prevState) => {
                                const newState = [...prevState];
                                newState[index].email = e.target.value;
                                return newState;
                            })
                            }
                        />
                        ) : (
                        user.email
                        )}
                    </td>
                    <td>
                        {isEditing === index ? (
                        <input
                            className="w-full text-center"
                            type="number" // Corrected to "number"
                            name="phone"
                            value={user.phone}
                            onChange={(e) =>
                            setData((prevState) => {
                                const newState = [...prevState];
                                newState[index].phone = e.target.value;
                                return newState;
                            })
                            }
                        />
                        ) : (
                        user.phone
                        )}
                    </td>
                    <td>
                        {isEditing === index ? (
                        <input
                            className="w-full text-center"
                            type="text"
                            name="role"
                            value={user.role}
                            onChange={(e) =>
                            setData((prevState) => {
                                const newState = [...prevState];
                                newState[index].role = e.target.value;
                                return newState;
                            })
                            }
                        />
                        ) : (
                        user.role
                        )}
                    </td>
                    <td className="flex justify-center items-center space-x-4 py-2">
                        <span className="text-green-500">
                            {renderEditOrSaveButton(
                            index,
                            user._id,
                            user.clientName,
                            user.email,
                            user.role
                            )}
                        </span>
                        <span className="text-red-500">
                            <FontAwesomeIcon
                            icon={faTrash}
                            className=""
                            onClick={() => deleteUser(user._id, user.clientName)}
                            />
                        </span>
                        </td>

                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        <ToastContainer />
        </div>
    );
}


// import React, { useState, useEffect } from "react";
// import { faTrash, faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactPaginate from 'react-paginate';
// import { useRef } from "react";

// export default function AdminHome({ userData }) {

//   // setting state
//   const [data, setData] = useState([]);
//   const [limit, setLimit] = useState(5);
//   const [pageCount, setPageCount] = useState(1);
//   const currentPage = useRef();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({});

//   useEffect(() => {
//     currentPage.current = 1;
//     getPaginatedUsers();
//   }, []);

//   // fetch all users
//   const getAllUser = () => {
//     fetch("http://localhost:8000/getAllUser", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
//         setData(data.data);
//       });
//   };

//   // logout
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };

//   // delete user
//   const deleteUser = (id, name) => {
//     if (window.confirm(`Are you sure you want to delete ${name}`)) {
//       fetch("http://localhost:8000/deleteUser", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           userid: id,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           alert(data.data);
//           getPaginatedUsers();
//         });
//     }
//   };

//   // pagination
//   function handlePageClick(e) {
//     console.log(e);
//     currentPage.current = e.selected + 1;
//     getPaginatedUsers();
//   }

//   function changeLimit() {
//     currentPage.current = 1;
//     getPaginatedUsers();
//   }

//   function getPaginatedUsers() {
//     fetch(`http://localhost:8000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
//         setPageCount(data.pageCount);
//         setData(data.result);
//       });
//   }

//   const handleEdit = (index) => {
//     setIsEditing(true);
//     setEditedData(data[index]);
//   };

//   const handleSave = (id) => {
//     setIsEditing(false);
//     fetch(`http://localhost:8000/updateUser/${id}`, {
//       method: "PUT",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify(editedData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//         getPaginatedUsers();
//       });
//   };

//   const handleChange = (e, field) => {
//     setEditedData({ ...editedData, [field]: e.target.value });
//   };

//   return (
//     <div className="mt-2">
//       <div>
//         <h3>User Details</h3>
//         <table className="w-full mt-3">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Role</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//           {data.map((user, index) => (
//             <tr key={index} className="text-center">
//               <td>
//                 {isEditing ? (
//                   <input type="text" value={editedData.clientName} onChange={(e) => handleChange(e, "clientName")} />
//                 ) : (
//                   user.clientName
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <input type="email" value={editedData.email} onChange={(e) => handleChange(e, "email")} />
//                 ) : (
//                   user.email
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <input type="text" value={editedData.role} onChange={(e) => handleChange(e, "role")} />
//                 ) : (
//                   user.role
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <FontAwesomeIcon icon={faSave} onClick={() => handleSave(user._id)} />
//                 ) : (
//                   <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(index)} />
//                 )}
//               </td>
//               <td>
//                 <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user._id, user.fname)} />
//               </td>
//             </tr>
//           ))}
//         </table>
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={10}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           marginPagesDisplayed={2}
//           containerClassName="pagination justify-content-center"
//           pageClassName="page-item"
//           pageLinkClassName="page-link"
//           previousClassName="page-item"
//           previousLinkClassName="page-link"
//           nextClassName="page-item"
//           nextLinkClassName="page-link"
//           activeClassName="active"
//           forcePage={currentPage.current - 1}
//         />
//         <input placeholder="Limit" onChange={(e) => setLimit(e.target.value)} />
//         <button onClick={changeLimit}>Set Limit</button>
//         <button onClick={logOut} className="btn btn-primary">
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }