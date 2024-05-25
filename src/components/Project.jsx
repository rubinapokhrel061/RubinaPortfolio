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
      description:
        "It is a project that build  using MERN stack technologies to create a full stack web development experience",
    },
    {
      id: 2,
      logo: FileSharing,
      name: "File Sharing",
      pathUrl: "https://file-sharing-clientside.vercel.app/",
      description:
        "It is a project that help share files by generating file link",
    },
    {
      id: 2,
      logo: chatimage,
      name: "Chat App",
      pathUrl: "https://chat-app-rust-sigma.vercel.app/",
      description:
        "It is a project that help understand the concept of socket io",
    },
  ];
  return (
    <>
      <div id="project" className="w-full md:mt-96 md:pt-20 ">
        <div
          name="project"
          className="max-w-screen-2xl container h-96 mb-72 lg:mb-3  sm:mb-1 sm:h-screen lg:h- md:mr-8  xl:h-36 xl:pt-3 pt-10"
        >
          <div className="text-center mx-8 ">
            <h1 className="font-semibold text-xl text-[#2f9997] inline border-b-2 border-gray-400">
              PROJECT
            </h1>

            <div className=" grid sm:grid-cols-2 lg:grid-cols-3  mx-auto  mt-12 relative  mb-12 xl:mb-1 sm:gap-6 text-[#000] dark:text-slate-100 gap-10 w-[280px] sm:w-[650px] sm:h-[180px] md:w-[640px] md:h-[230px] lg:w-[900px] xl:w-[1100px]">
              {cardItem.map(({ id, logo, name, pathUrl, description }) => (
                <>
                  <div className="  bg-[#dbe7e7] dark:bg-[#112240] rounded-lg shadow">
                    <img
                      className="rounded-t-lg sm:w-[400px] md:h-[150px]"
                      src={logo}
                      alt=""
                    />

                    <div className="p-5">
                      <h5
                        key={id}
                        className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white"
                      >
                        {name}
                      </h5>

                      <div className="text-justify text-[13px] md:text-[14px] mb-5 tracking-[.1px] leading-[1.3]  relative font-[200] ">
                        {description}
                      </div>
                      <a
                        href={pathUrl}
                        target="_blank"
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
      </div>
    </>
  );
};

export default Project;
