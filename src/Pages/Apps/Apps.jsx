import React, { Suspense } from 'react';
import App from './App';
import { Link } from 'react-router';

const Apps = ({data}) => {
    return (
        <div>
            <div className='text-center py-13 md:py-20'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-[#627382] text-lg mt-5 mx-5'>Explore All Trending Apps on the Market developed by us</p>
                <div>
                    <Suspense fallback={<span>Loading.....</span>}>
                    <div className='grid md:grid-cols-4 justify-items-center gap-6 mx-5 md:mx-35 border mt-8'>
                       {
                        data.slice(0,8).map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)
                       }
                    </div>
                    </Suspense>
                    <Link to="/apps"><a className='btn btn-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-8'>Show All</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Apps;