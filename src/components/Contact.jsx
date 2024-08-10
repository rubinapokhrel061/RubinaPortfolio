import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full my-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-7 w-[85%] sm:w-[80%] mx-auto">
        <div className="rounded-lg py-12 px-2 sm:p-12 text-center sm:text-start bg-gray-100 dark:bg-[#1a1633] md:w-1/2">
          <span className="text-base md:text-lg uppercase">Get In Touch</span>
          <h1 className="text-6xl md:text-7xl font-bold">Contact.</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-5 py-10">
            <a
              href="mailto:pokhrelrubina2061@gmail.com"
              className="border cursor-pointer border-gray-300 rounded-md flex justify-center items-center w-full sm:w-auto px-3 py-2  gap-2"
            >
              <span>Email</span>
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
              target="_blank"
              rel="noopener noreferrer"
              className="border cursor-pointer w-full sm:w-auto flex justify-center items-center  border-gray-300 rounded-md r px-3 py-2 gap-2"
            >
              <span>LinkedIn</span>
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rubinapokhrel061"
              target="_blank"
              rel="noopener noreferrer"
              className="border cursor-pointer w-full sm:w-auto border-gray-300 rounded-md flex justify-center items-center px-3 py-2  gap-2"
            >
              <span>GitHub</span>
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={contactImage}
            className="float-end rounded-lg"
            alt="contact us"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
