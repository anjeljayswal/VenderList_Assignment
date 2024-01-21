
import Pagination from './Pagination';

const VendersTable = ({ venders }) => {
  return (
    // <table className='w-full border-separate border-spacing-2'>
    //   <thead>
    //     <tr>
    //       <th className='border border-slate-600 rounded-md'>No</th>
    //       <th className='border border-slate-600 rounded-md'>Name</th>
    //       <th className='border border-slate-600 rounded-md'>Account Number</th>
    //       <th className='border border-slate-600 rounded-md'>Bank Name</th>
    //       <th className='border border-slate-600 rounded-md max-md:hidden'>
    //           Address Line 1
    //       </th>
    //       <th className='border border-slate-600 rounded-md max-md:hidden'>
    //           Address Line 2
    //       </th>
    //       <th className='border border-slate-600 rounded-md'>City</th>
    //       <th className='border border-slate-600 rounded-md'>ZipCode</th>
    //       <th className='border border-slate-600 rounded-md'>Operations</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {venders && venders.map((vender, index) => (
    //       <tr key={vender._id} className='h-8'>
    //         <td className='border border-slate-700 rounded-md text-center'>
    //           {index + 1}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center'>
    //           {vender.vname}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.accountNumber}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.bname}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.addresLine1}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.addresLine2}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.city}
    //         </td>
    //         <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
    //           {vender.zipcode}
    //         </td>
            
    //         <td className='border border-slate-700 rounded-md text-center'>
    //           <div className='flex justify-center gap-x-4'>
    //             <Link to={`/venders/details/${vender._id}`}>
    //               <BsInfoCircle className='text-2xl text-green-800' />
    //             </Link>
    //             <Link to={`/venders/edit/${vender._id}`}>
    //               <AiOutlineEdit className='text-2xl text-yellow-600' />
    //             </Link>
    //             <Link to={`/venders/delete/${vender._id}`}>
    //               <MdOutlineDelete className='text-2xl text-red-600' />
    //             </Link>
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <Pagination data={venders} itemsPerPage={10}/>
  );
};

export default VendersTable;
