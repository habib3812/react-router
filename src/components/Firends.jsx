import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Firend from './firend';

const Firends = () => {

const firends = useLoaderData();
//console.log(firends)

    return (
        <div>
            <h1>hello firends:{firends.length}</h1>
            <div className='ms-10'> 
                {
                 firends.map(firend => <Firend
                 key={firend.id}
                 firend={firend}
                 >
                 </Firend>)  
                }
            </div>
        </div>
    );
};

export default Firends;