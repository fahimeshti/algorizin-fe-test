import React from 'react';
import TableRow from './TableRow';
import SearchField from './SearchField';
import SingleListItem from './SingleListItem';
import { faHome, faFileAlt, faListAlt, faCog } from '@fortawesome/free-solid-svg-icons'
// images
import green from '../resources/green.svg'
import red from '../resources/red.svg'
import yellow from '../resources/yellow.svg'


const Inventory = () => {

    const ListItemData = [
        {
            name: 'Dashboard',
            icon: faHome,
            active: false
        },
        {
            name: 'Inventory',
            icon: faFileAlt,
            active: true
        },
        {
            name: 'Documents',
            icon: faListAlt,
            active: false
        },
        {
            name: 'Settings',
            icon: faCog,
            active: false
        }
    ]

    const tableDataArr = [
        {
            date:'11 Nov 2021', 
            title:'Hammer' ,
            details:'This is a hammer to do work with' ,
            statusTxt:'Alright' ,
            statusImg: green ,
            quantityLeft:'200' ,
            quantityTotal:'300' ,
            unitPrice:'10' ,
            amount:'2000.00'
        },
        {
            date:'10 Nov 2021', 
            title:'Hammer' ,
            details:'This is a Screw to do work with' ,
            statusTxt:'Alright' ,
            statusImg: green ,
            quantityLeft:'122' ,
            quantityTotal:'230' ,
            unitPrice:'10' ,
            amount:'1220.00' 
        },
        {
            date:'6 Nov 2021', 
            title:'Hammer' ,
            details:'Wood plan will be used to do woodworks, duh' ,
            statusTxt:'In Progress' ,
            statusImg: yellow ,
            quantityLeft:'100' ,
            quantityTotal:'300' ,
            unitPrice:'1.5' ,
            amount:'150.00' 
        },
        {
            date:'28 Oct 2021', 
            title:'Hammer',
            details:'-',
            statusTxt:'Out of Stock ',
            statusImg: red,
            quantityLeft:'0',
            quantityTotal:'200',
            unitPrice:'10',
            amount:'0.00' 
        },
        {
            date:'22 Oct 2021', 
            title:'Hammer',
            details:'-',
            statusTxt:'Out of Stock ',
            statusImg: red,
            quantityLeft:'0',
            quantityTotal:'200',
            unitPrice:'10',
            amount:'0.00' 
        },
        {
            date:'16 Oct 2021', 
            title:'Hammer',
            details:'-',
            statusTxt:'Out of Stock ',
            statusImg: red,
            quantityLeft:'0',
            quantityTotal:'200',
            unitPrice:'10',
            amount:'0.00' 
        },
        {
            date:'9 Oct 2021', 
            title:'Hammer',
            details:'This is a hammer to do work with',
            statusTxt:'Alright ',
            statusImg: green,
            quantityLeft:'200',
            quantityTotal:'300',
            unitPrice:'10',
            amount:'2000.00' 
        },
        {
            date:'5 Oct 2021', 
            title:'Hammer',
            details:'This is a hammer to do work with',
            statusTxt:'Alright ',
            statusImg: green,
            quantityLeft:'200',
            quantityTotal:'300',
            unitPrice:'10',
            amount:'2000.00' 
        },
        {
            date:'1 Oct 2021', 
            title:'Hammer',
            details:'This is a hammer to do work with',
            statusTxt:'Alright ',
            statusImg: green,
            quantityLeft:'200',
            quantityTotal:'300',
            unitPrice:'10',
            amount:'2000.00' 
        },
        {
            date:'23 Sep 2021', 
            title:'Hammer',
            details:'This is a hammer to do work with',
            statusTxt:'Alright ',
            statusImg: green,
            quantityLeft:'200',
            quantityTotal:'300',
            unitPrice:'10',
            amount:'2000.00' 
        }
    ]

    const dropDownOne = {
                0:'10 Items per page',            
                1:'15 Items per page',            
                2:'20 Items per page',            
                3:'25 Items per page'          
            }
    const dropDownTwo = {
                0:'Page 1 of 5',            
                1:'Page 2 of 5',            
                2:'Page 3 of 5',            
                3:'Page 4 of 5',         
                4:'Page 5 of 5',         
            }

    

return (
    <section className='relative min-h-screen w-screen flex px-0 pt-0 bg-[#F2F2F3] mt-[56px]'>
        <ul className='bg-white md:bg-[#F2F2F3] fixed bottom-0 left-0 md:top-[56px] flex flex-row md:flex-col items-center justify-around md:justify-start md:h-full w-full md:w-20 lg:w-[190px] space-y-2 p-4 z-40'>
        {
            ListItemData.map((item, idx) => (
                <SingleListItem 
                    key={idx}
                    name={item.name}
                    icon={item.icon}
                    active={item.active}
                />
            ))
        }  
        </ul>
        <div className='flex-1 w-full md:border-l lg:ml-[190px] md:ml-[80px]'>
            <div className='mt-4 pl-5 pb-4 border-b'>
                <h5 className='font-bold text-xl text-[#3E3F48]'>Inventory</h5> 
            </div>
            <div className='w-full flex items-center justify-center p-1.5 md:p-3.5 lg:p-5.5 lg:pr-6'>
                
                <div className="w-full relative overflow-x-auto md:border shadow-md rounded-lg">
                <div className="p-4 bg-white">
                <SearchField />
                </div>
                    <table className="w-full text-[12px] text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#FDF4ED] dark:bg-gray-700 dark:text-gray-400">
                        
                            <tr>
                            <th scope="col" className="p-0 md:p-4">
                            <div className="hidden md:flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-[#d2d2d5] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                            </th>

                            <th scope="col" className="hidden md:block px-1 py-3 whitespace-nowrap">
                                Date Updated
                            <i className="far fa-arrow-down p-1"></i>
                            </th>
                            <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                Title
                                <i className="far fa-arrows-alt-v p-1"></i>
                            </th>
                            <th scope="col" className="hidden lg:block px-2 py-3">
                                Details
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-3 text-right">
                                Quantity
                            </th>
                            <th scope="col" className="hidden lg:block px-2 py-3 text-center whitespace-nowrap">
                                Unit Price
                            </th>
                            <th scope="col" className="px-2 py-3 text-right whitespace-nowrap">
                                Amount
                                <i className="far fa-arrows-alt-v p-1"></i>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDataArr.map((data, idx)=>(
                                <TableRow 
                                    key={idx}
                                    date={data.date} 
                                    title= {data.title}
                                    details={data.details}
                                    statusTxt={data.statusTxt}
                                    statusImg={data.statusImg}
                                    quantityLeft={data.quantityLeft}
                                    quantityTotal={data.quantityTotal} 
                                    unitPrice={data.unitPrice}
                                    amount={data.amount}  
                                />
                                ))
                            }
                        </tbody>
                    </table>

                <div className='flex flex-row items-center justify-between bg-white text-[#88898E] p-4'>
                    
                        <select className='max-w-[200px] hidden md:block pr-10 px-1 outline-none py-1.5 rounded-md border shadow-ta text-[13px] cursor-pointer' name="items">
                            {
                                Object.entries(dropDownOne).map(
                                    ([key, value]) => <option key={key} value={key}>{value}</option>
                                )
                            }
                        </select>
                    <div className='flex flex-row items-center justify-between'>
                        <select className='max-w-[200px] pr-10 px-1 outline-none py-1.5 rounded-md border shadow-ta text-[13px] cursor-pointer' name="page">
                            {
                                Object.entries(dropDownTwo).map(
                                    ([key, value]) => <option key={key} value={key}>{value}</option>
                                )
                            }
                        </select>
                        <div className='max-w-[200px]'>
                            <i className="far fa-chevron-left m-1 ml-3 mr-2 text-[13px] px-5 py-2.5 shadow-ta border rounded-md cursor-pointer"></i>
                            <i className="far fa-chevron-right m-1 text-[13px] px-5 py-2.5 shadow-ta border rounded-md cursor-pointer"></i>
                        </div>
                    </div>
                </div>

                </div>

            
                
            </div>
        </div>
    </section>
);
};

export default Inventory;