import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfileDropdown({ userId }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUpdateProfileIcon = async () => {
    const profileIcon = 'new_profile_icon_url'; // Replace with the URL of the new profile icon
    try {
      await axios.put(`http://localhost:8000/users/${userId}/update-icon`, { profileIcon });
      // Optionally, you can update the user state here to reflect the changes
      console.log('Profile icon updated successfully');
    } catch (error) {
      console.error('Error updating profile icon:', error);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center space-x-5 m-1">
      <div className="relative mr-2 z-n1">
          <input type="text" className="pl-8 h-8 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
          <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
        </div>
        <button onClick={toggleDropdown} className="flex items-center">
          <span className="relative flex-shrink-0">
            <img className="w-7 h-7 rounded-full" src={user ? user.profileIcon : 'default_profile_icon_url'} alt="profile" />
            <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900" />
          </span>
          <span className="ml-2 items-center">{user ? user.clientName : ' '}</span>
          <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-2 index-2 mt-40 w-48 rounded-md py-1 dark:bg-gray-300 shadow bg-white">
            {user && user.role === 'admin' ? (
              <>
                <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to="/admin">Admin Panel</Link>
                <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to="/settings">Settings</Link>
              </>
            ) : user && user.role === 'user' ? (
              <>
                <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to="/profile">Profile</Link>
                <button onClick={handleUpdateProfileIcon} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200">Update Profile Icon</button>
                <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to="/settings">Settings</Link>
              </>
            ) : null}
            <button onClick={handleUpdateProfileIcon} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200">Profile</button>
            <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to="/">Sign out</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileDropdown;
