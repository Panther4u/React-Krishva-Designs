
import React, { useState } from 'react';
import ProfileDrapdown from './ProfileDrapdown';
// Ensure Bootstrap CSS is imported in your project. 
// This can be done in your index.js or App.js file, or in the HTML.
// import 'bootstrap/dist/css/bootstrap.min.css';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false); // Start with the menu closed

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Use Bootstrap classes along with React state to manage the collapse behavior.
  return (
    <>
      <div className={`bg-white dark:bg-gray-900 ml-14 dark:border-gray-800 relative border-gray-200 flex-row ${isOpen ? '' : 'collapse'}`}>
        {/* Menu content */}
            <div className="flex items-center text-gray-400  absolute ">
              <button className="block px-3.5 py-2 text-sm text-gray-100 hover:bg-gray-700 h-10 w-12 dark:text-gray-500 rounded-md flex-row items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </button>
              <button className="block px-3.5 py-2 text-sm text-gray-100 hover:bg-gray-700 h-10 w-12 dark:text-gray-500 rounded-md flex-row items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </button>
              <button className=" block px-3.5 py-2 text-sm text-gray-100 hover:bg-gray-700 h-10 w-12 dark:text-gray-500 rounded-md flex-row items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  <line x1={12} y1={11} x2={12} y2={17} />
                  <line x1={9} y1={14} x2={15} y2={14} />
                </svg>
              </button>
              <button className="block px-3.5 py-2 text-sm text-gray-100 hover:bg-gray-700 h-10 w-12 dark:text-gray-500 rounded-md flex-row items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x={3} y={3} width={7} height={7} />
                  <rect x={14} y={3} width={7} height={7} />
                  <rect x={14} y={14} width={7} height={7} />
                  <rect x={3} y={14} width={7} height={7} />
                </svg>
              </button>
            </div>
        </div>

      <button className="w-10 h-10 flex items-center justify-center  absolute px-2" onClick={toggleMenu}>
        {isOpen ? (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 100 2h8a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      {/* Other content */}
      <ProfileDrapdown/>
    </>
  );
}

export default SideNav;

