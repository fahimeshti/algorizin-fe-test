import React from 'react';
import CheckBox from './CheckBox';
import green from '../resources/green.svg'
import red from '../resources/red.svg'
import yellow from '../resources/yellow.svg'

const TableRow = ({ date, title, details, statusTxt, quantityLeft, quantityTotal, unitPrice }) => {

    let statusBulb;
    if (statusTxt === 'Alright') {
        statusBulb = green
    } else if (statusTxt === 'In Progress') {
        statusBulb = yellow
    } else if (statusTxt === 'Out of Stock') {
        statusBulb = red
    }
    return (
        <tr className='bg-white md:hover:bg-[#EFFBF0]'>
            <td className="p-0 md:w-4 md:p-4">
                <CheckBox />
            </td>
            <th scope="row" className="hidden md:block px-0 py-4 font-medium text-gray-900 whitespace-nowrap">
                {date}
            </th>
            <td className="px-2 py-4">
                {title}
            </td>
            <td className="hidden lg:block px-2 py-4 break-normal">
                {details}
            </td>
            <td className="px-2 py-4 md:min-w-[110px]">
                <span className='hidden md:inline whitespace-nowrap'>{statusTxt}</span>
                <img src={statusBulb} className="inline ml-2 pl-3 md:pl-0 pt-1.5 md:pt-0" alt="" />
            </td>
            <td className="px-2 py-4 text-right">
                <b className='text-[#3E3F48]'>{quantityLeft}</b>/{quantityTotal}
            </td>
            <td className="hidden lg:block px-2 py-4 text-center">
                ${unitPrice}
            </td>
            <td className="px-3 py-4 text-right">
               ${(unitPrice*quantityLeft).toFixed(2)}
            </td>
        </tr>
    );
};

export default TableRow;