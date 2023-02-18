import React from "react";
import { AiOutlineFileSearch, AiOutlineUser } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";
import CountUp from "react-countup";
function AllCounting(...rest) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className="md:h-60 h-full componetGradient text-white md:py-0 py-10">
      <div className="grid md:grid-cols-3 place-items-center h-full gap-7">
        <div className="text-center">
          {/*  */}
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={100}>
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
                  <div className="flex items-center justify-center text-7xl gap-2">
                    <AiOutlineUser></AiOutlineUser>
                    <h2 className="" ref={countUpRef}><span>k</span></h2>
                 
                  </div>
                 
                </VisibilitySensor>
                
              );
            }}
          </CountUp>
          <p>8 thousand daily active users</p>
          {/*  */}
        </div>
        <div className="text-center">
        <CountUp {...rest} start={viewPortEntered ? null : 0} end={150}>
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
                  <div className="flex items-center justify-center text-7xl gap-2">
                    <FaRegNewspaper></FaRegNewspaper>
                    <h2 className="" ref={countUpRef}><span>k</span></h2>
                 
                  </div>
                 
                </VisibilitySensor>
                
              );
            }}
          </CountUp>
        
          <p>Over 7 thousand Resume shared </p>
        </div>
        <div className="text-center">
        <CountUp {...rest} start={viewPortEntered ? null : 0} end={245}>
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
                  <div className="flex items-center justify-center text-7xl gap-2">
                    <AiOutlineFileSearch></AiOutlineFileSearch>
                    <h2 className="" ref={countUpRef}><span>k</span></h2>
                 
                  </div>
                 
                </VisibilitySensor>
                
              );
            }}
          </CountUp>
          <p>Over 5k open job positions</p>
        </div>
      </div>
    </div>
  );
}

export default AllCounting;
