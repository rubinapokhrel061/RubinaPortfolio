import FileSharing from "../assets/fileshare.jpg";
import LMS from "../assets/LMS.png";
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
  ];
  return (
    <>
      <div
        name="project"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-5 mt-20"
      >
        <div>
          <h1 className="font-semibold text-xl mt-6 text-[#4c8dd7] dark:text-[#64ffda] mb-7 sm:text-center">
            Project
          </h1>

          <div className="flex flex-col gap-12 mb-12 text-[#000] dark:text-slate-100 md:flex-row md:justify-center md:gap-10 ">
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
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Project;
