import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png"
import { Link } from "react-router";

const App = ({ singleApp }) => {
  const { title, image, downloads, ratingAvg,id } = singleApp;
  return (
    <div>
      
        <Link to={`/appDetails/${id}`}>
        <div className="card bg-base-100 w-80 md:w-96 shadow-sm p-4">
          <figure className="">
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body px-0 py-4">
            <h2 className="card-title text-xl">
              {title}
            </h2>
            
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline text-[#00D390] font-bold bg-[#F1F5E8]"><img src={downloadImg} width="15px" alt="" /> {downloads}</div>
              <div className="badge badge-outline bg-[#ffe1c0]"><img src={ratingImg} width="15px" alt="" /> {ratingAvg}</div>
            </div>
          </div>
        </div>
      </Link>  
     
    </div>
  );
};

export default App;
