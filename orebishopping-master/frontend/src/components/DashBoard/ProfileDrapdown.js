
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileDrapdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
        <div className="flex justify-end items-center space-x-5 m-1">
            <button onClick={toggleDropdown} className="flex items-center">
                <span className="relative flex-shrink-0">
                <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
                <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900" />
                </span>
                <span className="ml-2 items-center">Kavi Nivi</span>
                <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {isDropdownOpen && (
                <div className="absolute right-2 index-2 mt-40 w-48 rounded-md py-1 dark:bg-gray-300 shadow bg-white">
                    <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to={"/"}>Profile</Link>
                    <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to={"/"}>Settings</Link>
                    <Link className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200" to={"/"}>Sign out</Link>
                </div>
            )}
        </div>
        </>
    );
}

export default ProfileDrapdown;
