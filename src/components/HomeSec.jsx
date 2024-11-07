import { ReactTyped } from "react-typed";

const HomeSec = () => {
  return (
    <>
      <div id="home" className="w-full min-h-screen  bg-[#beecc9] ">
        <div className="flex flex-col gap-3  absolute text-center top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <span className="text-xl md:text-3xl animate-zoomIn text-gray-800">
            Hello👋, It's Me
          </span>
          <h3 className="text-[80px] leading-[1] font-bold md:text-8xl lg:text-9xl font-serif  animate-zoomIn">
            Rubina Pokhrel
          </h3>
          <div className="flex space-x-2 justify-center text-xl md:text-3xl text-gray-800">
            <h1>And, I'm a</h1>

            <ReactTyped
              className=" text-[#28A745] hover:text-[#21903b] font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default HomeSec;
