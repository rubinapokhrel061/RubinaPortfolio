import { ReactTyped } from "react-typed";

const HomeSec = () => {
  return (
    <>
      <div
        id="home"
        className="w-full min-h-screen bg-red-50 dark:bg-[#100e1e]"
      >
        <div className="flex flex-col gap-3 pt-20 absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <span className="text-xl md:text-3xl animate-zoomIn">
            Hello👋, It's Me
          </span>
          <h3 className="text-7xl font-bold  md:text-8xl lg:text-9xl font-serif  text-yellow-500 animate-zoomIn">
            Rubina Pokhrel
          </h3>
          <div className="flex space-x-2 justify-center  text-xl md:text-3xl">
            <h1>And, I'm a</h1>

            <ReactTyped
              className="text-yellow-500  font-bold"
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
