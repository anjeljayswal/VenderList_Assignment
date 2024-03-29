import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import BackButton from './BackButton';
import Spinner from './Spinner';

const ShowVender = () => {
    const [vender, setVender] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:6005/api/onevender/${id}`)
        .then((response) => {
          console.log("show response",response);
          setVender(response.data);

          console.log("show data",setVender);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
  return (
    <div className='p-4 bg-gradient-to-r from-purple-500 to-pink-500'>
      <BackButton />
      
      <h1 className='text-3xl my-4'>Show Vender</h1>
      {loading ? (
        <Spinner />
        
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{vender._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{vender.vname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{vender.bname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{vender.accountNumber}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(vender.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(vender.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowVender
