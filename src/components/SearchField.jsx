import React from 'react';
import searchIcon from '../resources/search.png';

const SearchField = () => {
    return (
        <>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={searchIcon} alt="" />
            </div>
            <input type="search" name="search" id="table-search" className="w-full bg-[#F2F2F3] border-0 outline-none text-base text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-80 pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
            </div>  
        </>
    );
};

export default SearchField;