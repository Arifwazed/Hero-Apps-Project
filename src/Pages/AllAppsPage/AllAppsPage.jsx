import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import App from "../Apps/App";
import AppError from "./AppError";

const AllAppsPage = () => {
    const data = useLoaderData();
    const [resultData,setResultData] = useState(data);
    const [search,setSearch] = useState("");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSearch(newValue);
        console.log("search size: ",newValue.length)
        if(newValue.length > 0){
            const filterData = data.filter(
                (item) => item.title.toLowerCase().includes(newValue.toLowerCase())
            );
            if(filterData.length > 0){
                setResultData(filterData);
                console.log( "Filter: ",filterData)
            }
            else{
                setResultData([])
            }
        }else{
            setResultData(data)
        }
    }
    
    console.log("search:",search)

  return (
    <div className="bg-gray-100 py-15">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-lg mt-5 mx-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* second part */}
      <div className="mx-5 md:mx-35 mt-10">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-lg">({resultData.length}) Apps Found</h2>
          <label className="input w-48 md:w-86">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" value={search} onChange={handleChange}/>
          </label>
        </div>

        <div>
            <Suspense fallback={<span>Loading.....</span>}>
                    <div className='grid md:grid-cols-4 justify-items-center gap-6  border mt-8'>
                        {
                            resultData.length > 0 ? (resultData.map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)) :
                            (<AppError></AppError>)
                        }
                    </div>
            </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AllAppsPage;
