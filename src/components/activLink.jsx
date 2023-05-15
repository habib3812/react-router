import React from 'react';
import './activeLink.css'
import { NavLink } from 'react-router-dom';
const ActivLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>isActive? "active" :""
            }
        >
          {children}
        </NavLink>
    );
};

export default ActivLink;