import React from 'react';
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { removeFromLocalStorage } from '../../Routes/Utility/addToLocalStorage';
import { toast } from "react-toastify";

const InstallApp = ({singleApp,uninstall}) => {
    const {id,title,image,downloads,ratingAvg,size} = singleApp;

    const handleUninstall = id => {
        console.log("uninstall id:" , id);
        const alert = removeFromLocalStorage(id);
        console.log("alert",alert)
        
        toast.success("Uninstall Successfully!",{
                position: "top-center",
                theme:"colored"
            })
                    
        if(uninstall){
            uninstall(id)
        }
        
    }
    return (
        <div>
            <div className="flex justify-between items-center p-3 bg-white shadow-md rounded-lg my-3">
          <div className="flex gap-6">
            
            <img src={image} className='w-16 h-16 rounded-xl' alt="" />
            
            <div className="justify-start">
              <h1 className="font-semibold text-xl ">
                {title}
              </h1>
              <div className="flex gap-7 mt-3">
                <div className="flex items-center text-[#00D390] ">
                  <img src={downImg} className="h-4 mr-1.5" alt="" />
                  <p className='text-sm font-semibold'>{downloads}</p>
                </div>
                <div className="flex items-center text-[#FF8811] ">
                  <img src={ratingImg} className="h-4 mr-1.5" alt="" />
                  <p className='text-sm font-semibold'>{ratingAvg}</p>
                </div>
                <div className="flex items-center text-[#627382] text-sm font-semibold">
                  <p className="mr-1.5">{size}</p>
                  <p>MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => {handleUninstall(id)}} className="btn btn-md bg-[#00D390] text-white  font-semibold mr-2">
              Uninstall
            </button>
          </div>
        </div>
        
        </div>
    );
};

export default InstallApp;