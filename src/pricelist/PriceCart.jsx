import React from 'react';
import Fesrces from '../fecarch/Fesrces';

const PriceCart = ({ price }) => {
    console.log(price)
    return (
        <div className='bg-lime-300 rounded p-3 mt-3 flex flex-col'>

            <h5 className='text-center'>
                <span className=' text-3xl text-purple-700 font-bold'>{price.price}</span>
                <span>/man</span>
                <h2 className='text-2xl font-bold'>{price.name}</h2>
            </h5>



            <p className='underline text-orange-700 font-bold'>features:</p>
            {
                price.features.map((feature, idx) => <Fesrces
                    key={idx}
                    feature={feature}
                ></Fesrces>)
            }
            <button className='mt-9 p-2 bg-slate-500 w-full text-yellow-50 mt-auto rounded hover:bg-slate-700'>by now</button>
        </div>
    );
};

export default PriceCart;