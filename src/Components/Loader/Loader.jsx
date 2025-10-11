import React from 'react';
import { RingLoader } from "react-spinners";
import { Hourglass,RotatingLines } from "react-loader-spinner";
const Loader = () => {
    return (
        <div>
            
             <RotatingLines width="200" color="#632EE3" />
        </div>
    );
};

export default Loader;