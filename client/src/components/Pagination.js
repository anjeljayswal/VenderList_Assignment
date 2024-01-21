import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Pagination = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(data.length / itemsPerPage);
    const stIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = (stIndex + itemsPerPage);
    const dataToDisplay = data.slice(stIndex, endIndex);
    const handlePageChange = (newPage) => {

        setCurrentPage(newPage);
        
        };
    return (
        <>
            <table className='w-full border-separate border-spacing-2 border border-slate-600 rounded-md'  >
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Name</th>
                        <th className='border border-slate-600 rounded-md'>Account Number</th>
                        <th className='border border-slate-600 rounded-md'>Bank Name</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                            Address Line 1
                        </th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                            Address Line 2
                        </th>
                        <th className='border border-slate-600 rounded-md'>City</th>
                        <th className='border border-slate-600 rounded-md'>ZipCode</th>
                        <th className='border border-slate-600 rounded-md'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {dataToDisplay && dataToDisplay.map((vender, index) => (
                        <tr key={vender._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index + 1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {vender.vname}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.accountNumber}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.bname}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.addresLine1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.addresLine2}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.city}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {vender.zipcode}
                            </td>

                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/venders/details/${vender._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800' />
                                    </Link>
                                    <Link to={`/venders/edit/${vender._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                                    </Link>
                                    <Link to={`/venders/delete/${vender._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 my-2 rounded-lg'

                    onClick={() => handlePageChange(currentPage - 1)}

                    disabled={currentPage === 1}

                >

                    Previous

                </button>

                <span>{`Page ${currentPage} of ${totalPage}`}</span>

                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => handlePageChange(currentPage + 1)}

                    disabled={currentPage === totalPage}

                >

                    Next

                </button>

            </div>
        </>
    )
}

export default Pagination
