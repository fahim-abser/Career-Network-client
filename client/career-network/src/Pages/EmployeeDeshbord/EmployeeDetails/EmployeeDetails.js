import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

import { FaBriefcase } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";
import VisibilitySensor from "react-visibility-sensor";
import { SlNote } from "react-icons/sl";
import CountUp from "react-countup";
function EmployeeDetails(...rest) {
  const user = useContext(AuthContext);
  const [viewPortEntered, setViewPortEntered] = useState(false);
  console.log(user?.user);
  return (
    <div className="pl-4">
      <p className="text-3xl text font-bold">
        Howdy, {user?.user?.displayName}
      </p>
      {/* breadcrumbs */}
      <div class="flex items-center py-2 overflow-x-auto whitespace-nowrap">
        <Link to="/" class="text-sky-700 dark:text-gray-200">
          Home
        </Link>

        <span class="mx-2 text-sky-700 dark:text-gray-300 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <p class="text-sky-700 dark:text-gray-200 ">Dashboard</p>
      </div>
      {/*  */}
      {/* card */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 ">
        <div>
          <div class="flex w-full  justify-between p-6 mt-16 bg-blue-800 text-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="">
              <p className="text-3xl">Job Applied</p>
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={7}>
                {({ countUpRef }) => {
                  return (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                    >
                      <div className="flex items-center  font-bold text-5xl ">
                        <h1 className="">0</h1>
                        <h2 className="" ref={countUpRef}>
                         
                        </h2>
                      </div>
                    </VisibilitySensor>
                  );
                }}
              </CountUp>
            </div>
            <div className="pt-4">
              <FaBriefcase size={50}></FaBriefcase>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <div class="flex w-full  justify-between p-6 mt-16 bg-black text-white rounded-lg shadow-lg dark:bg-gray-800">
              <div>
                <p className="text-3xl">Saved Job</p>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={7}>
                {({ countUpRef }) => {
                  return (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                    >
                      <div className="flex items-center  font-bold text-5xl ">
                        <h1 className="">0</h1>
                        <h2 className="" ref={countUpRef}>
                         
                        </h2>
                      </div>
                    </VisibilitySensor>
                  );
                }}
              </CountUp>
              </div>
              <div className="pt-4">
                <BsBookmarkCheck size={50}></BsBookmarkCheck>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div class="flex w-full  justify-between p-6 mt-16 bg-orange-700 text-white rounded-lg shadow-lg dark:bg-gray-800">
            <div>
              <p className="text-3xl">Task</p>
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={2}>
                {({ countUpRef }) => {
                  return (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                    >
                      <div className="flex items-center  font-bold text-5xl ">
                      <h1 className="">0</h1>
                        <h2 className="" ref={countUpRef}>
                     
                        </h2>
                      </div>
                    </VisibilitySensor>
                  );
                }}
              </CountUp>
            </div>
            <div className="pt-4">
              <SlNote size={50}></SlNote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
