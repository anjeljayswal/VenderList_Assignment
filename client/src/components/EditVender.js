// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton';
import Spinner from './Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const EditVender = () => {
    const [vname, setVName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bname, setBname] = useState('');
    const [addresLine1, setAddresLine1] = useState('');
    const [addresLine2, setAddresLine2] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:6005/api/onevender/${id}`)
            .then((response) => {
                setAccountNumber(response.data.accountNumber);
                setVName(response.data.vname)
                setBname(response.data.bname)
                setAddresLine1(response.data.addresLine1)
                setAddresLine2(response.data.addresLine2)
                setCity(response.data.city);
                setZipcode(response.data.zipcode);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error happened. Please Chack console');
                console.log(error);
            });
    }, [])

    const handleEditBook = () => {
        const data = {
            vname,
            accountNumber,
            bname,
            addresLine1,
            addresLine2,
            city,
            zipcode
        };
        setLoading(true);
        axios
            .patch(`http://localhost:6005/api/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Vender Edited successfully', { variant: 'success' });
                navigate('/dashboard');
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happened. Please Chack console');
                enqueueSnackbar('Error', { variant: 'error 2' });
                console.log(error);
            });
    };

    return (
        <div className='p-1'>
            <BackButton />

            <h1 className='text-3xl my-1'>Edit Vender</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input
                        type='text'
                        value={vname}
                        onChange={(e) => setVName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Bank Name</label>
                    <input
                        type='text'
                        value={bname}
                        onChange={(e) => setBname(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Account Number</label>
                    <input
                        type='number'
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Address Line1</label>
                    <input
                        type='text'
                        value={addresLine1}
                        onChange={(e) => setAddresLine1(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-1  w-full '
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Address Line2</label>
                    <input
                        type='text'
                        value={addresLine2}
                        onChange={(e) => setAddresLine2(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-1  w-full '
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>City</label>
                    <input
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-1  w-full '
                    />
                </div>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500'>Zipcode</label>
                    <input
                        type='text'
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-1  w-full '
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    )
}



export default EditVender
