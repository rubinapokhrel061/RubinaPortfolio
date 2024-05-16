import FileSharing from "../assets/filesharing.png";
import LMS from "../assets/LMS.png";
const Project = () => {
  const cardItem = [
    {
      id: 1,
      logo: LMS,
      name: "Book Store",
    },
    {
      id: 2,
      logo: FileSharing,
      name: "FileSharing",
    },
  ];
  return (
    <>
      <div
        name="project"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-5 mt-20"
      >
        <div>
          <h1 className="font-semibold text-xl text-[#64ffda] mb-5 sm:text-center">
            Project
          </h1>

          <div className="flex flex-col gap-12 md:flex-row md:justify-center md:gap-10   my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="w-full h-[360px] md:h-[430px] md:w-[400px] border-[2px] px-4 bg-[#112240]  rounded-lg shadow-lg p-1 cursor-pointer "
                key={id}
              >
                <img
                  src={logo}
                  className="w-[400px] h-[160px] md:w-[380px] md:h-[180px] lg:w-[380px] lg:h-[210px]  p-1 mt-[8px] rounded-md "
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-lg md:text-xl mb-2">
                    {name}
                  </div>
                  <p className="px-2 text-sm md:text-base lg:text-lg text-slate-300">
                    {name} system web application using MERN stack to create a
                    full-stack web development experience
                  </p>
                </div>
                <div className="  py-4 space-x-3 ">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-base md:text-lg px-4 py-2 rounded">
                    Source code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>
      <hr />
    </>
  );
};

export default Project;
