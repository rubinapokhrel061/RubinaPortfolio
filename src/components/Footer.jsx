import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-2 bg-[#CBD5E1] dark:bg-[#112240]">
        <div className="max-w-screen-2xl m-auto p-2 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ru.beenaa.35" target="_blank">
                <FaFacebook size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/rubina__pokhrel/?igsh=eXJqbmttbWoyeWxj"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/rubinapokhrel061" target="_blank ">
                <FiGithub size={24} />
              </a>
            </div>
            <div className="mt-3 border-t border-gray-700 pt-3   items-center">
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
