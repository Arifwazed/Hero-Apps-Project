import React, { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewImg from "../../assets/icon-review.png"
import RatingChart from "./RatingChart";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage, getInstalledApps } from "../../Routes/Utility/addToLocalStorage";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
    const {id} = useParams();
    const appid = parseInt(id)
    const data = useLoaderData();
    const dataSerial = data.find((item) => item.id === appid);
    const {title, image, downloads, ratingAvg,reviews,description,companyName,size} = dataSerial;
    const [disable,setDisable] = useState(false);

    useEffect(()=> {
        const storedAppData = getInstalledApps();
        const convertedStoredApp = storedAppData.map((id) => parseInt(id));
        console.log( convertedStoredApp)
        console.log("id:",  typeof appid)
        const storedApp = convertedStoredApp.includes(appid);
        console.log("storedApp:",storedApp)
        if(storedApp){
            setDisable(true)
        }
    },[])

    const handleInstall = id => {
        console.log("button id:", id);
        const alert = addToLocalStorage(id);
        setDisable(true);
        if(alert){
            toast.success("Install Successfully!",{
            position: "top-center",
            theme:"colored"
        })
        }
        else{
            toast.error("⚠️ Already Installed!",{
            position: "top-center",
            theme:"colored",
        })
        }
    }

  return (
    <div>
      <div className="bg-gray-100 py-20 px-5 md:px-20 ">
        <div className="card lg:card-side shadow-sm ">
          <figure className="w-76 md:w-88 mx-auto p-4 bg-white rounded-xl">
            <img
              src={image} 
              alt="Album"
            />
          </figure>
          <div className="card-body md:ml-5">
            <h2 className="card-title font-bold text-3xl">{title}</h2>
            <p className="text-[#627382] text-lg">Developed by <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">{companyName}</span></p>
            <hr className="border border-gray-300"/>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-5 mx-auto md:mx-0">
                <div className="">
                    <img src={downloadImg} alt="" />
                    <p className="text-[#001931] text-base mt-1">Downloads</p>
                    <h2 className="font-bold text-4xl mt-1">{downloads}M</h2>
                </div>
                <div className="">
                    <img src={ratingImg} alt="" />
                    <p className="text-[#001931] text-base mt-1">Average Ratings</p>
                    <h2 className="font-bold text-4xl mt-1">{ratingAvg}</h2>
                </div>
                <div className="">
                    <img src={reviewImg} alt="" />
                    <p className="text-[#001931] text-base mt-1">Total Reviews</p>
                    <h2 className="font-bold text-4xl mt-1">{reviews}</h2>
                </div>
            </div>
            <div className="card-actions justify-center md:justify-start mt-5">
              <button  disabled={disable} onClick={() => {handleInstall(id)}}
              style={{ backgroundColor: "#00D390" }} 
              className={`btn btn-lg  text-white  font-semibold ${disable ?  "cursor-not-allowed opacity-90" : "hover:opacity-80"}`}>
                {disable ? "Installed" : `Install Now (${size} MB)`}</button>
            </div>
          </div>
        </div>
        <hr className="border border-gray-300 mt-15"/>
        <h1 className="text-2xl font-semibold mt-7">Ratings</h1>
        <RatingChart data={dataSerial.ratings}></RatingChart>
        <hr className="border border-gray-300 mt-15"/>
        <h1 className="font-bold text-2xl my-5">Description</h1>
        <p className="text-[#627382] text-lg">{description}
        </p>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AppDetails;
