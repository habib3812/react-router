import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Heder from '../heders/Heder';

const Home = () => {
    const navigation=useNavigation();
    return (
        <div>
            <Heder></Heder>
            {/* <h1>home common pages</h1> */}
            <div>{navigation.state==='loading'? 'loding...': ''}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;