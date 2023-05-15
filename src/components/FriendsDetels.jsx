import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendsDetels = () => {
    const firend= useLoaderData();
    console.log (firend);

    const navigate = useNavigate();
    const hendelGoBack = () =>{
        navigate(-1)
    }


    return (
        <div>
            hello FriendsDetels
            <p className='font-bold text-3xl'>name: {firend.name}</p>
            <p className='font-bold text-3xl'>phone: {firend.phone}</p>
            <p className='font-bold text-3xl'>phone: {firend.id}</p>
           <br></br>
            <button onClick={hendelGoBack}>go back</button>
        </div>
    );
};

export default FriendsDetels;