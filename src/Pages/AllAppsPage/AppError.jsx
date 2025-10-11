import React from 'react';
import appErrorImg from "../../assets/App-Error.png"
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div>
            <div className='text-center mx-auto my-30'>
                <div className='flex justify-center items-center mt-5 px-8 md:px-0'>
                    <img src={appErrorImg} alt=""  />
                </div>
                
                <h1 className="text-4xl font-bold mt-5">OPPS!! APP NOT FOUND</h1>
                <p className="text-[#627382] text-lg mt-5 mx-5">The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/apps"><button className="btn btn-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-base my-8">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default AppError;