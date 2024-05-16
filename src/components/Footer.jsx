import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-5">
        <div className="max-w-screen-2xl container m-auto p-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
              <FiGithub size={24} />
            </div>
            <div className="mt-3 border-t border-gray-700 pt-4  items-center">
              <p className="text-xs">
                &copy; 2024 Rubina ❤. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
