import React from 'react';

const SelectBox = ({datas}) => {
    return (
        <select className='max-w-[200px] pr-10 px-1 outline-none py-1.5 rounded-md border shadow-ta text-[13px] cursor-pointer' name="page">
            {
                Object.entries(datas).map(
                    ([key, value]) => <option key={key} value={key}>{value}</option>
                )
            }            
        </select>
    );
};

export default SelectBox;