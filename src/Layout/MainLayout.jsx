import React from 'react';
import Navbar from '../Component/Common/Navbar';
import Footer from '../Component/Common/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;