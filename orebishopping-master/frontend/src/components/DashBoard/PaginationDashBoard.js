    import React, { useState } from 'react';

    function PaginationDashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(4);
    // const [filterOption, setFilterOption] = useState('');
    // const [categoryFilter, setCategoryFilter] = useState('');

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };


        // Add logic to filter data based on the selected option and category

        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };
    return (
        <>
            <div className="flex w-full mt-5">
        {/* <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0" onClick={handlePrevPage}>
            <svg viewBox="0 0 24 24" className="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
            <line x1={16} y1={2} x2={16} y2={6} />
            <line x1={8} y1={2} x2={8} y2={6} />
            <line x1={3} y1={10} x2={21} y2={10} />
            </svg>
            Last 30 days
            <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
            </svg>
        </button> */}
        <div className="flex justify-end items-center space-x-5">
                <button onClick={toggleDropdown} className="relative inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                    <span className="ml-2 items-center">Select category</span>
                    <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className="absolute index-1 left-[0] w-48 mt-56 rounded-md py-1 dark:bg-gray-200 shadow bg-white ">
                            <li className="block px-4 py-2 text-gray-900 hover:bg-gray-300">Blouse Design</li>
                            <li className="block px-4 py-2 text-gray-900 hover:bg-gray-300">Chudi Design</li>
                            <li className="block px-4 py-2 text-gray-900 hover:bg-gray-300">Lehenga Design</li>
                            <li className="block px-4 py-2 text-gray-900 hover:bg-gray-300">Kids Design</li>
                            <li className="block px-4 py-2 text-gray-900 hover:bg-gray-300">Others</li>
                    </div>
                )}
            </div>
        <div className="ml-auto text-gray-500 text-xs  mt-0">
            <span className="mr-3">Page {currentPage} of {totalPages}</span>
            <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0" onClick={handlePrevPage}>
            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
            </svg>
            </button>
            <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0" onClick={handleNextPage}>
            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
            </svg>
            </button>
        </div>
    </div>
    
    </>

    );
    };


    


export default PaginationDashboard;
