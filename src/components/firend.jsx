import React from 'react';
import'./friend.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Firend = (props) => {
    // const{name}=friend;
    // console.log(props.firend);
// bitton next 1
const navigate= useNavigate()
    const hendelNav=()=>{
            navigate (`/friend/${props.firend.id}`);
    };


    return (
        <div className='firendCard'>

          <p>name  :{props.firend.id}</p>
          <p>name  :{props.firend.name}</p>
          <p>email  :{props.firend.email}</p>
          {/* // bitton next 2 */}
          <Link to={`/friend/${props.firend.id}`}><button>show detels</button></Link>
           {/* // bitton next 3 */}
          <p> <Link to={`/friend/${props.firend.id}`}>show detels</Link></p>
           {/* // bitton next 1 */}
          <button onClick={hendelNav}>next more</button>
        </div>
    );
};

export default Firend;