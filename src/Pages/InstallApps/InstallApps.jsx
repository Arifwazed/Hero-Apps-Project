import React, { useEffect, useState } from "react";
import InstallApp from "./InstallApp";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../Routes/Utility/addToLocalStorage";
import { ToastContainer } from "react-toastify";


const InstallApps = () => {
    const data = useLoaderData();
    const [installApps,setInstallApps] = useState([]);
    const [sort,setSort] =useState('');
    const [displayApps,setDisplayApps] = useState([])

    useEffect(() => {
        const storedData = getInstalledApps();
        const convertedStoredData = storedData.map(id => parseInt(id));
        const storedApps = data.filter(app => convertedStoredData.includes(app.id));
        console.log(storedApps)
        setInstallApps(storedApps)
    },[])

    const handleSort = (type) => {
        setSort(type);
    }
    useEffect(()=>{
        if(!sort){
            setDisplayApps(installApps)
        }
        else{
            let sortingList = [...installApps];
            if(sort === "Low-High"){
                sortingList.sort((a,b) => a.downloads - b.downloads);
            }
            else{
                sortingList.sort((a,b) => b.downloads - a.downloads);
            }
            setDisplayApps(sortingList)
        }
    },[sort,installApps])

  return (
    <div className="bg-gray-100 py-15">
      <div className="text-center px-4 md:px-15">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382] text-lg mt-5 mx-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center mt-5">
          <h1 className="font-semibold text-xl underline">{displayApps.length} Apps Found</h1>
          <div className="dropdown dropdown-bottom dropdown-end ">
            <div tabIndex={0} role="button" className="btn m-1 text-base btn-dash">
              {sort ? sort : "Sort By Size"} ⬇️
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={()=>{handleSort('Low-High')}}>Low-High</a>
              </li>
              <li>
                <a onClick={()=>{handleSort('High-Low')}}>High-Low</a>
              </li>
            </ul>
          </div>
        </div>
        {/* display */}
        <div className="my-2">
            {
                displayApps.map(singleApp => <InstallApp 
                    key={singleApp.id} 
                    singleApp={singleApp}
                    uninstall={(id) => {
                        setDisplayApps(pre => pre.filter(app => app.id !== id));
                    }}
                    ></InstallApp>)
            }
            
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstallApps;
