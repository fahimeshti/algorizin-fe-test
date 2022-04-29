import React from 'react';

const TableRow = ({ date, title, details, statusTxt, statusImg, quantityLeft, quantityTotal, unitPrice, amount }) => {
    return (
        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="md:w-4 md:p-4">
                <div className="hidden md:flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="hidden md:block px-1 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {date}
            </th>
            <td className="px-1 py-4">
                {title}
            </td>
            <td className="hidden lg:block px-1 py-4 break-normal">
                {details}
            </td>
            <td className="px-1 py-4 md:min-w-[110px]">
                <span className='hidden md:inline whitespace-nowrap'>{statusTxt}</span>
                <img src={statusImg} className="inline ml-2 pl-3 md:pl-0 pt-1.5 md:pt-0" alt="" />
            </td>
            <td className="px-1 py-4 text-right">
                <b className='text-[#3E3F48]'>{quantityLeft}</b>/{quantityTotal}
            </td>
            <td className="hidden lg:block px-3 py-4 text-center">
                ${unitPrice}
            </td>
            <td className="px-3 py-4 text-right">
                ${amount}
            </td>
        </tr>
    );
};

export default TableRow;