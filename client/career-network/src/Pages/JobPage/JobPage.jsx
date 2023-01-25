import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiTag } from "react-icons/hi";
const JobPage = () => {
    const data = useLoaderData()
    console.log(data)
    const[search, setSearch] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    return (
    <div className='flex items-center justify-center'>
            <div className="mt-10">
        <p className="text-xl text-gray-700 dark:text-white font-bold mb-5">
          Find Your Dream Job Here
        </p>
        <div className="form-control">
          <div className="input-group">
          <div className="flex items-center relative ">
              <HiTag className=" absolute dark:text-gray-900 text-gray-300"></HiTag>
              <input
                type="text"
                placeholder="Job title or keyword" 
                className="input input-bordered pl-6 border-l-0 focus:outline-none dark:text-black"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* location input */}
            <div className="hidden md:block"> 
            <div className="flex items-center relative   ">
              <CiLocationOn className=" absolute dark:text-gray-900 text-gray-300 "></CiLocationOn>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered pl-6 border-l-0 focus:outline-none   dark:text-black"
                
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            </div>
            <div className="flex items-center relative ">
             
              <select  onChange={(e) => setSelectCategory(e.target.value)} className="select select-bordered w-full  focus:outline-none dark:text-gray-900 text-gray-300 ">
                <option disabled selected>
                 Select Category
                </option>
                <option>web development</option>
                <option>marketing</option>
              </select>
            </div>
  
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {data
          .filter((item) => {
            if (search.toLowerCase() === "" && searchLocation.toLowerCase() === "" && selectCategory.toLowerCase()=="")
              return item;
            else {
              return (
                item.job_title?.toLowerCase().includes(search) &&
                item.location?.toLowerCase().includes(searchLocation) &&
                item.category_name?.toLowerCase().includes(selectCategory)
              );
            }
            // return search.toLowerCase()==='' || selectCategory?.toLowerCase===''? item : item.title.toLowerCase().includes(search) || item.category.toLowerCase.includes(selectCategory)
          })
          .map((item, idx) => (
            <div
              key={idx}
              className="card lg:w-[700px] shadow-xl mt-10 bg-gray-50 dark:bg-blue-800"
            >
              <div className="card-body">
                <h2 className="card-title"></h2>
                <p className="text-xl text-green-500">{item.job_title}</p>
                <p className="flex items-center gap-2">
                  <MdLocationPin />
                  {item.location}
                </p>
                <p className="flex items-center gap-2">
                  <FaGraduationCap />
                  {item.skills}
                </p>
                <div className="flex justify-around">
                  <p className="flex items-center gap-2">
                    <MdWork /> At least {item.experience}{" "}
                    {item.experience > 1 ? "years" : "year"}
                  </p>
                  <p className="flex items-center gap-2">
                    <BsCalendar2DateFill />
                    Deadline: {item.deadline}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    );
};

export default JobPage;