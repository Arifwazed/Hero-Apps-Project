import React from 'react';
import pageErrImg from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center mx-auto my-30'>
                <div className='flex justify-center items-center mt-5 px-8 md:px-0'>
                    <img src={pageErrImg} alt=""  />
                </div>
                
                <h1 className="text-4xl font-bold mt-5">Oops, Page not Found!</h1>
                <p className="text-[#627382] text-lg mt-5 mx-5">The page you are looking for is not available.</p>
                <Link to=""><button className="btn btn-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-base my-8">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;