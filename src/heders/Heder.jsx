import React from 'react';
import './nave.css'
import './nave.css'
import ActivLink from '../components/activLink';
const Heder = () => {


    return (
        <nav className='heder'>
            <ActivLink to ="/">home</ActivLink>
            <ActivLink to="/firends">firends</ActivLink>
            <ActivLink to ="/about">about</ActivLink>
            <ActivLink to ="/contact"> contact</ActivLink>
        </nav>
    );
};

export default Heder;