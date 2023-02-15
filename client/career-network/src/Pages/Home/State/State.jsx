import React from 'react';
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";
import CountUp from "react-countup";


const State = (...rest) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <div className=" my-20">
      
  
        <div className="flex justify-evenly items-center mt-10">
          {/* jobs */}
          <div>
          <p className="text-2xl font-bold mb-3 text-sky-800">Jobs</p>
            <strong >
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={350}>
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
                   <span className="pl-2 text-xl text-gray-600" ref={countUpRef}> </span>
                    </VisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
          </div>
          {/* members */}
          <div>
          <p className="text-2xl font-bold mb-3 text-sky-800">Members</p>
            <strong data-number='305'>
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={200}>
            {({ countUpRef }) => {
              return <VisibilitySensor
              active = {!viewPortEntered}
              onChange = {isVisible=>{
                if(isVisible){
                  setViewPortEntered(true)
                }
              }}
              
              >
                  <span className="pl-6 text-xl text-gray-600" ref={countUpRef}> </span>
  
              </VisibilitySensor>;
            }}
          </CountUp>
        </strong>
          </div>
          {/* Resume */}
          <div>
          <p className="text-2xl font-bold mb-3 text-sky-800">Resume</p>
            <strong >
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={120}>
            {({ countUpRef }) => {
              return <VisibilitySensor
              active = {!viewPortEntered}
              onChange = {isVisible=>{
                if(isVisible){
                  setViewPortEntered(true)
                }
              }}
              
              >
                  <span className="pl-6 text-xl text-gray-600" ref={countUpRef}> </span>
  
              </VisibilitySensor>;
            }}
          </CountUp>
        </strong>
          </div>
          {/* company */}
          <div>
            <p className="text-2xl font-bold mb-3 text-sky-800">Company</p>
            <strong data-number='305'>
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={80}>
            {({ countUpRef }) => {
              return <VisibilitySensor
              active = {!viewPortEntered}
              onChange = {isVisible=>{
                if(isVisible){
                  setViewPortEntered(true)
                }
              }}
              
              >
                  <span className="pl-7 text-xl text-gray-600" ref={countUpRef}></span>
  
              </VisibilitySensor>;
            }}
          </CountUp>
        </strong>
          </div>
        </div>
      </div>
    );
};

export default State;