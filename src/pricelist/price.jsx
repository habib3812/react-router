// import React, { useEffect, useState } from 'react';
import PriceCart from './PriceCart';

const Price = () => {

    const prices = [
        {
            id: 1,
            name: "Product A",
            price: 19.99,
            features: ["Feature 1", "Feature 2", "Feature 3"]
        },
        {
            id: 2,
            name: "Product B",
            price: 29.99,
            features: ["Feature 2", "Feature 4", "Feature 5"]
        },
        {
            id: 3,
            name: "Product C",
            price: 9.99,
            features: ["Feature 1", "Feature 3"]
        }
    ]
        ;




    // const [prices,setPrices] = useState([]);

    // useEffect(() => {
    //   fetch('prices.json')
    //     .then(res => res.json())
    //     .then(data => setPrices(data));
    // }, [])



    return (
        <div className='mx-12'>
            <h1 className='text-4xl text-center mt-5 font-bold text-purple-500'>price list </h1>
            <div className=' grid md:grid-cols-3 gap-4 '>
                {
                    prices.map(price =>
                        <PriceCart
                            key={price.id}
                            price={price}
                        ></PriceCart>
                    )
                }
            </div>
        </div>
    );
};

export default Price;