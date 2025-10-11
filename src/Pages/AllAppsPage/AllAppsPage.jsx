import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigation } from "react-router";
import App from "../Apps/App";
import AppError from "./AppError";
import Loader from "../../Components/Loader/Loader";

const AllAppsPage = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const routeLoading = navigation.state === "loading";

  const [resultData, setResultData] = useState(data);
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
    setSearchLoading(true); // start search loading spinner

    // small delay to simulate debounce
    setTimeout(() => {
      if (newValue.length > 0) {
        const filterData = data.filter((item) =>
          item.title.toLowerCase().includes(newValue.toLowerCase())
        );
        setResultData(filterData);
      } else {
        setResultData(data);
      }
      setSearchLoading(false); // stop spinner
    }, 500);
  };

  // When route changes (React Router loading)
  useEffect(() => {
    if (routeLoading) {
      setSearchLoading(true);
    } else {
      setSearchLoading(false);
    }
  }, [routeLoading]);

  return (
    <div className="bg-gray-100 py-15">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-lg mt-5 mx-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Header Section */}
      <div className="mx-5 md:mx-35 mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            ({resultData.length}) Apps Found
          </h2>
          <label className="input w-48 md:w-86 flex items-center border px-3 py-2 rounded-lg bg-white shadow-sm">
            <svg
              className="h-5 w-5 text-gray-400"
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
            <input
              type="search"
              required
              placeholder="Search Apps"
              value={search}
              onChange={handleChange}
              className="ml-2 outline-none w-full"
            />
          </label>
        </div>

        {/* App List Section */}
        <div className="mt-8 border p-3 rounded-md bg-white">
          {searchLoading ? (
            <div className="flex justify-center items-center py-10">
              <Loader />
            </div>
          ) : resultData.length > 0 ? (
            <div className="grid md:grid-cols-4 justify-items-center gap-6">
              {resultData.map((singleApp) => (
                <App key={singleApp.id} singleApp={singleApp} />
              ))}
            </div>
          ) : (
            <AppError />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppsPage;
