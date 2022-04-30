import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SingleSideBarItem = ({ name, icon, active }) => {
return (
    <li className='md:flex items-center justify-center text-[#6B6C72] w-10 md:w-full'>
        <a href="/#" className={`
            ${'flex items-center justify-start md:justify-center w-full md:w-10 md:h-10 lg:h-10 focus:outline-none focus:ring-0 focus:text-[#00C614] focus:font-medium focus:bg-transparent md:focus:bg-white md:focus:shadow-lx md:rounded lg:w-full'}
            ${active && 'bg-white md:shadow-lx text-[#00C614] font-medium'}`
            }
        >
            <div className='md:flex items-center justify-center md:text-lg lg:w-[25px] inline-block lg:ml-2'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <span className="hidden lg:inline-block font-medium w-full py-2 pl-2 pr-4 text-xs"
            >{name}</span>
        </a>
    </li>
    );
};

export default SingleSideBarItem;