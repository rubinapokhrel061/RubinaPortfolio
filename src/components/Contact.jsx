import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full pt-20 pb-14  min-h-[85vh] md:min-h-[75vh]"
    >
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[85%] mx-auto">
        <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 text-center sm:text-left w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 uppercase mb-4">
            Let's Connect
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Contact Me
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out to me through any of the following platforms.
            I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
            <a
              href="mailto:pokhrelrubina2061@gmail.com"
              className="group border cursor-pointer border-gray-300 rounded-md w-full sm:w-auto px-6 py-3 flex justify-center items-center gap-3 text-gray-900 bg-white hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <MdEmail className="text-2xl group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white">
                Email
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
              target="_blank"
              rel="noopener noreferrer"
              className="group border cursor-pointer w-full sm:w-auto px-6 py-3 flex justify-center items-center gap-3 border-gray-300 rounded-md text-gray-900 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaLinkedin className="text-2xl group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/rubinapokhrel061"
              target="_blank"
              rel="noopener noreferrer"
              className="group border cursor-pointer w-full sm:w-auto px-6 py-3 flex justify-center items-center gap-3 border-gray-300 rounded-md text-gray-900 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaGithub className="text-2xl group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
