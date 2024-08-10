// import intropic from "../assets/rubina1.jpg";
// const About = () => {
//   return (
//     <>
//       <div id="about" className="w-full ">
//         <div
//           name="About"
//           className="max-w-screen-2xl container  w-[90%] mx-auto pt-20"
//         >
//           <div className="flex  justify-evenly gap-x-14">
//             <div>
//               <span className=" text-xl uppercase ">Introduction</span>
//               <h1 className="text-7xl  ">Overview.</h1>
//               <div className="text-justify text-[14px] mt-5 rounded-[.6rem] tracking-[.1px] leading-[1.7]  relative font-[200]  ">
//                 Hi there! I’m Rubina Pokhrel, a full-stack developer from Nepal
//                 with a passion for creating functional and visually appealing
//                 web applications. I am eager to enhance my skills and gain
//                 experience in full-stack development.
//                 <br />
//                 <br />I am currently seeking opportunities to contribute to
//                 projects where I can apply my knowledge and grow professionally.
//                 If you’re looking for a dedicated and enthusiastic developer,
//                 I’d be excited to discuss how I can contribute to your team or
//                 project.
//               </div>
//             </div>
//             <div>
//               <div className="relative w-[400px]">
//                 <img
//                   src={intropic}

//                   className="rounded-lg"
//                   alt="Intro Image"
//                 />
//                 <div className="absolute inset-0  rounded-xl bg-gray-900 opacity-25 transition-opacity duration-300 hover:opacity-0" />
//               </div>
//             </div>
//           </div>

//           <br />
//         </div>
//       </div>
//       <br />
//     </>
//   );
// };

// export default About;

import intropic from "../assets/rubina.jpg";
const About = () => {
  return (
    <div id="about" className="w-full py-20 dark:bg-[#1a1633]">
      <div name="About" className="max-w-screen-2xl">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-10 lg:gap-14 w-[85%] mx-auto">
          <div className="flex-1 order-2 md:order-1 max-w-md md:max-w-md ">
            <span className="text-base md:text-lg uppercase ">
              Introduction
            </span>
            <h1 className="text-6xl md:text-7xl font-bold">Overview.</h1>
            <p className="text-justify text-base md:text-lg mt-5 rounded-lg tracking-tight leading-relaxed font-light">
              Hi there! I’m Rubina Pokhrel, a full-stack developer from Nepal
              with a passion for creating functional and visually appealing web
              applications. I am eager to enhance my skills and gain experience
              in full-stack development.
              <br />
              <br />I am currently seeking opportunities to contribute to
              projects where I can apply my knowledge and grow professionally.
              If you’re looking for a dedicated and enthusiastic developer, I’d
              be excited to discuss how I can contribute to your team or
              project.
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2 relative w-full max-w-xs">
            <img
              src={intropic}
              className="w-full h-auto max-w-xs rounded-lg"
              alt="Intro Image"
            />
            <div className="absolute inset-0 rounded-lg bg-gray-900 opacity-25 transition-opacity duration-300 hover:opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
