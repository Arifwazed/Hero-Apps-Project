import React from 'react';
import appErrorImg from "../../assets/App-Error.png"
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div>
            <div className='text-center mx-auto'>
                <img src={appErrorImg} alt=""  />
                <h1>OPPS!! APP NOT FOUND</h1>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <Link><button>Go Back!</button></Link>
            </div>
        </div>
    );
};

export default AppError;