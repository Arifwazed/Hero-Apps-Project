import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
    const navigate = useNavigation(); 
    const loading = navigate.state === 'loading';
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className='py-15'>
                {loading ? <Loader/> : <Outlet></Outlet>}
            </div> */}
            {loading ? 
            (<div className="flex justify-center items-center py-10"> <Loader /> </div>) 
            : <Outlet></Outlet>}
            
            <Footer></Footer>
        </div>
    );
};

export default Root;