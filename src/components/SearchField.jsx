import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchField = () => {
    return (
        <>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative min-h-[2.5rem]">
            <input type="search" name="search" id="table-search" className="w-full bg-[#F2F2F3] border border-transparent hover:border-gray-300 focus:border outline-none text-base text-gray-900 rounded-lg focus:ring-check-blue focus:border-check-blue block md:w-80 pl-10 p-1.5 cursor-pointer transition" placeholder="Search" />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-[#88898E] my-icon" />
                </div>
            </div>  
        </>
    );
};

export default SearchField;