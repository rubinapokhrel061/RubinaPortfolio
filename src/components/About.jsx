import intropic from "../assets/rubina.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen py-12 border border-green-300"
    >
      <div className="max-w-screen-2xl">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-10 lg:gap-14 w-[85%] mx-auto">
          {/* Left Section: Text */}
          <div className="flex-1 order-2 md:order-1 max-w-md">
            <span className="text-base md:text-lg uppercase text-gray-700">
              Introduction
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              Overview.
            </h1>
            <p className="text-justify text-base md:text-lg mt-5 rounded-lg tracking-tight leading-relaxed font-light text-gray-600">
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

          {/* Right Section: Image */}
          <div className="flex-1 order-1 md:order-2 relative w-full max-w-xs">
            <img
              src={intropic}
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
              alt="Intro Image"
            />
            <div className="absolute inset-0 rounded-lg bg-gray-900 opacity-20 transition-opacity duration-300 hover:opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
