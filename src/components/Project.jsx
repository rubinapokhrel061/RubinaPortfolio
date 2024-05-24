import FileSharing from "../assets/fileshare.jpg";
import LMS from "../assets/LMS.png";
import chatimage from "../assets/chat.jpg";
const Project = () => {
  const cardItem = [
    {
      id: 1,
      logo: LMS,
      name: "Book Store",
      pathUrl: "https://lms-clientside.vercel.app/",
    },
    {
      id: 2,
      logo: FileSharing,
      name: "File Sharing",
      pathUrl: "https://file-sharing-clientside.vercel.app/",
    },
    {
      id: 2,
      logo: chatimage,
      name: "Chat App",
      pathUrl: "https://file-sharing-clientside.vercel.app/",
    },
  ];
  return (
    <>
      <div
        name="project"
        className="max-w-screen-2xl container h-1/2 sm:h-screen md:mr-8 sm:mb-52 xl:h-72 pt-5 mt-[100px]"
      >
        <div className="text-center mr-10 ">
          <h1 className="font-semibold text-xl text-[#2f9997] inline border-b-2 border-gray-400">
            Project
          </h1>

          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 mx-5  sm:ml-16  mt-12 relative  mb-12  sm:gap-9 text-[#000] dark:text-slate-100 gap-12 sm:w-[600px] sm:h-[180px] md:w-[600px] md:h-[230px] lg:w-[900px] xl:w-[1100px]">
            {cardItem.map(({ id, logo, name }) => (
              <>
                <div
                  key={id}
                  className="  bg-[#dbe7e7] dark:bg-[#112240] rounded-lg shadow"
                >
                  <img
                    className="rounded-t-lg sm:w-[400px] md:h-[150px]"
                    src={logo}
                    alt=""
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
                      {name}
                    </h5>

                    <p className="mb-3 font-normal text-sm md:text-base text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      className="inline-flex bg-transparent border  border-[#2f9997] hover:bg-[#2a9797]  items-center px-3 py-2 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:outline-none "
                    >
                      VISIT LIVE
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-12 mb-12 text-[#000] dark:text-slate-100 md:flex-row md:justify-center md:gap-10 ">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className="w-full h-[360px] md:h-[430px] md:w-[400px] border-[2px] px-4 bg-[#d4dae1] dark:bg-[#112240]  rounded-lg shadow-lg p-1 cursor-pointer "
            key={id}
          >
            <img
              src={logo}
              className="w-[400px] h-[160px] md:w-[380px] md:h-[180px] lg:w-[380px] lg:h-[210px]  p-1 mt-[8px] rounded-md "
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-lg md:mt-3 md:text-xl text-[#000] dark:text-[#64ffda] mb-2">
                {name}
              </div>
              <p className="px-2 text-sm md:text-base  ">
                {name} system web application using MERN stack to create a
                full-stack web development experience
              </p>
            </div>
            <div className="  py-4 space-x-3 ">
              <a href="" target="_blank">
                <button className="bg-transparent border border-[#4c8dd7] hover:bg-[#4c8dd7] text-[#000] dark:bg-blue-700 dark:hover:bg-blue-800 font-bold text-sm md:text-base px-4 py-2 rounded">
                  VISIT LIVE
                </button>
              </a>
            </div>
          </div>
        ))}
      </div> */}

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Project;
