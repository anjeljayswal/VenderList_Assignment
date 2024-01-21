import React, { useEffect, useState } from 'react'
import VenderSingleCard from './VenderSingleCard';

const PaginationCard = ({ data, itemsPerPage }) => {

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
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-0'>
                {dataToDisplay.map((item) => (
                    <VenderSingleCard key={item._id} vender={item} />
                ))}
            </div>
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

export default PaginationCard
