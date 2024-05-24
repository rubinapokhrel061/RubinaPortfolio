// import React from 'react'
import "./Timeline.css";
const Timeline = () => {
  return (
    <div className=" max-w-screen-xl mt-[100px] mx-auto  md:px-14 pt-5 ">
      <div className="text-center">
        <h1 className="font-semibold text-xl  text-[#2f9997] inline border-b-2 border-gray-400  ">
          Timeline
        </h1>
        <br />
        <br />
        <h1 className="font-semibold text-base   text-[#2f9997] inline   ">
          My Journey
        </h1>
      </div>

      <div className="timeline  relative  mx-auto ">
        <div className="t-container  left-container pt-2 md:text-right relative  left-0 px-[50px] md:w-[50%]  ">
          <small className="">2018-2019</small>
          <span></span>
          <div className="text-box px-[20px] py-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
            <h3 className="font-medium text-[#2f9997]">Alphabet</h3>

            <p className="text-[13px] ">
              lorem2 fmnfmnv dnm,dxklkfglks vmvnfgdkjgkj
            </p>
            <span
              className="left-container-arrow h-0 w-0 absolute top-[28px] z-[1] right-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-l-[15px]  border-l-[#dbe7e7] dark:border-l-[#112240] "
            ></span>
          </div>
        </div>
        <div className="t-container right-container relative md:left-[50%] py-[5px] px-[50px] md:w-[50%]">
          <small className="">2018-2019</small>
          <span></span>
          <div className="text-box py-[20px] px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
            <h3 className="font-medium text-[#2f9997] ">Alphabet</h3>

            <p className=" text-[13px] ">
              lorem2 fmnfmnv dnm,dxklkfglks vmvnfgdkjgkj
            </p>
            <span
              className="right-container-arrow h-0 w-0 absolute top-[28px] z-[1] left-[-15px] border-t-[15px] border-t-transparent border-b-[15px]
          border-b-transparent border-r-[15px]  border-l-[#dbe7e7] dark:border-l-[#112240]"
            ></span>
          </div>
        </div>
        <div className="t-container left-container md:text-right relative py-[10px] px-[50px] md:w-[50%] ">
          <small className="">2018-2019</small>
          <span></span>

          <div className="text-box py-[20px] px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
            <h3 className="font-medium text-[#2f9997] ">Alphabet</h3>

            <p className="text-[13px]">
              lorem2 fmnfmnv dnm,dxklkfglks vmvnfgdkjgkj
            </p>
            <span
              className="left-container-arrow h-0 w-0 absolute top-[28px] z-[1] right-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-l-[15px]  border-l-[#dbe7e7] dark:md:border-l-[#112240]"
            ></span>
          </div>
        </div>
        <div className="t-container right-container relative md:left-[50%] py-[10px] px-[50px] md:w-[50%]">
          <small className="">2018-2019</small>
          <span></span>
          <div className="text-box py-[20px] px-[20px] bg-[#dbe7e7] dark:bg-[#112240] relative rounded-lg text-[15px]">
            <h3 className="font-medium  text-[#2f9997]">Alphabet</h3>

            <p className="text-[13px]">
              lorem2 fmnfmnv dnm,dxklkfglks vmvnfgdkjgkj
            </p>
            <span
              className="right-container-arrow h-0 w-0 absolute top-[28px] z-[1] left-[-15px] border-t-[15px]  border-t-transparent border-b-[15px]
          border-b-transparent border-r-[15px]  border-l-[#dbe7e7]  dark:md:border-l-[#112240]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
