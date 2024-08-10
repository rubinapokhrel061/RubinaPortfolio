// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import contactImage from "../assets/contact.jpg";
// const Contact = () => {
//   return (
//     <>
//       <div id="contact" className="w-full my-20">
//         <div className="flex flex-col md:flex md:flex-row md:justify-between gap-7 w-[80%] mx-auto">
//           <div className=" rounded-lg p-12 bg-gray-100 dark:bg-[#1a1633] md:w-1/2 ">
//             <span className="text-base md:text-lg uppercase ">
//               Get In Touch
//             </span>
//             <h1 className="text-6xl md:text-7xl font-bold ">Contact.</h1>
//             <div className="flex gap-4 justify-center py-10 ">
//               <a
//                 href="pokhrelrubina2061@gmail.com"
//                 target="_blank"
//                 className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
//               >
//                 <span>Email</span>
//                 <MdEmail />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
//                 target="_blank"
//                 className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
//               >
//                 <span>Linkedin</span>
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="https://github.com/rubinapokhrel061"
//                 target="_blank"
//                 className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
//               >
//                 <span>GitHub</span>
//                 <FaGithub />
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <img
//               src={contactImage}
//               className=" float-end rounded-lg"
//               alt="contact us"
//             ></img>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Contact;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full my-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-7 w-[80%] mx-auto">
        <div className="rounded-lg p-12 bg-gray-100 dark:bg-[#1a1633] md:w-1/2">
          <span className="text-base md:text-lg uppercase">Get In Touch</span>
          <h1 className="text-6xl md:text-7xl font-bold">Contact.</h1>
          <div className="flex gap-4 justify-center py-10">
            <a
              href="mailto:pokhrelrubina2061@gmail.com"
              className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
            >
              <span>Email</span>
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
              target="_blank"
              rel="noopener noreferrer"
              className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
            >
              <span>LinkedIn</span>
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rubinapokhrel061"
              target="_blank"
              rel="noopener noreferrer"
              className="border cursor-pointer border-gray-300 rounded-md items-center px-3 py-2 flex gap-2"
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
