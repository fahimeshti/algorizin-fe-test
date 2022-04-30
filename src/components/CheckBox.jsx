import React from 'react';

const CheckBox = () => {
    return (
        <div className="hidden md:flex items-center justify-center">
            <input type="checkbox" id="checkbox-all-search" name="A3-confirmation" value="yes" className="cursor-pointer opacity-0 absolute h-[1.1rem] w-[1.1rem]" />
            <div className="bg-white border-2 rounded border-gray-200 w-[1.1rem] h-[1.1rem] flex flex-shrink-0 justify-center items-center mr-2 focus-within:bg-blue-500">
            <svg className="fill-current hidden w-3 h-3 text-gray-300 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                <g transform="translate(-9 -11)" fill="#fff" fillRule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
                </g>
            </svg>
            </div>
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
        </div>
    );
};

export default CheckBox;