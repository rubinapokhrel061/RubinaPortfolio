// import React from 'react'
import "./Timeline.css";
const Timeline = () => {
  return (
    <div className="w-full md:h-screen " id="timeline">
      <div className=" max-w-screen-xl mt-[20px] md:pt-16 sm:mt-28  mx-auto lg:mt-52  md:px-14 pt-5 ">
        <div className="text-center">
          <h1 className="font-semibold text-xl  text-[#2f9997] inline border-b-2 border-gray-400  ">
            TIMELINE
          </h1>
          <br />
          <br />
          <h1 className="font-semibold text-base   text-[#2f9997] inline   ">
            My Journey
          </h1>
        </div>

        <div className="timeline  relative  mx-auto ">
          <div className="t-container  left-container pt-2 md:text-right relative  left-0 px-[50px] md:w-[50%]  ">
            <small className="">2075</small>
            <span></span>
            <div className="text-box px-[20px] py-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
              <h3 className="font-medium text-[16px] text-[#2f9997]">SEE</h3>

              <div className="text-justify text-[#000] dark:text-[#fff] text-[12px] mt-5 tracking-[.1px] leading-[1.7]  relative font-[200] ">
                I passed my secondary education from Shree Manakamana Ratna
                Ambika Secondary School.
              </div>
              <span
                className="left-container-arrow h-0 w-0 absolute top-[28px] z-[1] right-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-l-[15px] border-l-[#dbe7e7] dark:border-l-[#112240] "
              ></span>
            </div>
          </div>
          <div className="t-container right-container relative md:left-[50%] py-[5px] px-[50px] md:w-[50%]">
            <small className="">2075-2078</small>
            <span></span>
            <div className="text-box py-[20px] px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
              <h3 className="font-medium text-[16px] text-[#2f9997] ">
                Intermediate Level(+2)
              </h3>

              <div className="text-justify text-[#000] dark:text-[#fff] text-[12px] mt-5 tracking-[.1px] leading-[1.7]  relative font-[200] ">
                Passed out 12th from Sukuna Secondary School in the year 2078.
              </div>
              <span
                className="right-container-arrow h-0 w-0 absolute top-[28px] z-[1] left-[-15px] border-t-[15px] border-t-transparent border-b-[15px]
                border-b-transparent border-r-[15px]  border-l-[#dbe7e7] dark:border-l-[#112240] dark:md:border-l-[#112240] "
              ></span>
            </div>
          </div>
          <div className="t-container left-container md:text-right relative py-[10px] px-[50px] md:w-[50%] ">
            <small className="">2078-2082</small>
            <span></span>

            <div className="text-box py-[20px] px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
              <h3 className="font-medium text-[16px] text-[#2f9997] ">
                Bachelor in Bsc.CSIT
              </h3>

              <div className="text-justify text-[#000] dark:text-[#fff] text-[12px] mt-5 tracking-[.1px] leading-[1.7]  relative font-[200] ">
                I am currently pursuing a Bachelor Degree in Computer Science &
                Information Technology at Amrit Science Campus, Tribhuvan
                University, currently in the 5th semester.
              </div>
              <span
                className="left-container-arrow h-0 w-0 absolute top-[28px] z-[1] right-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-l-[15px]  border-l-[#dbe7e7] dark:md:border-l-[#112240]"
              ></span>
            </div>
          </div>
          <div className="t-container right-container relative md:left-[50%] py-[10px] px-[50px] md:w-[50%]">
            <small className="">Present day</small>
            <span></span>
            <div className="text-box py-[20px]  px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
              <h3 className="font-medium text-[16px] text-[#2f9997]">
                Learning Mern Stack web devlopment
              </h3>

              <div className=" text-[#000] dark:text-[#fff] text-justify text-[12px] mt-5 tracking-[.1px] leading-[1.7]  relative font-[200] ">
                Currently I am learning Mern Stack and seeking mern stack
                developer jobs and internships to expand my experience and
                knowledge.
              </div>
              <span
                className="right-container-arrow h-0 w-0 absolute top-[28px] z-[1] left-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-r-[15px]  border-l-[#dbe7e7]  dark:md:border-l-[#112240]"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
