import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from './Spinner';
import VendersTable from './VendersTable';
import VendersCard from './VendersCard';
import Headers from './Header';

const Dashboard = () => {
 
  const [venders, setVenders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:6005/api/vender')
      .then((response) => {
        // console.log("response vender", response);
        setVenders(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <Headers/>
    
    <div className=' p-4 bg-gradient-to-r from-purple-500 to-pink-500  h-fit'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-6'>Vendors List</h1>
        <Link to='/venders/create'>
        
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
     
      
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <VendersTable venders={venders} />
      ) : (
        <VendersCard venders={venders} />
      )}
    </div>
    
    </>
  );
};

export default Dashboard
