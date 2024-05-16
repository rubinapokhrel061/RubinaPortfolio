import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <main className="py-14">
        <div className="max-w-screen-2xl container mx-auto px-4 mt-16 md:px-20">
          <div className="max-w-lg mx-auto  sm:text-center">
            <h1 className="font-semibold text-xl text-[#64ffda]">Contact</h1>
          </div>
          <div className=" flex flex-col-reverse md:flex md:flex-row  md:justify-center md:gap-5">
            <div className=" md:w-1/2 mt-12 max-w-lg space-y-12  mx-auto flex-col  ">
              <div className="  md:w-[90%] md:h-[45%] p-12 border-[2px] rounded-xl bg-[#112240] pt-8 border-[#64ffda] md:pt-16 ">
                <div>
                  <FaGithub className="w-[50px] h-[50px] mx-auto" />
                </div>

                <div className="px-2  text-lg  flex justify-center  items-center ">
                  www.github.com
                </div>
              </div>
              <div className="  md:w-[90%] md:h-[45%] p-12 border-[2px] rounded-xl bg-[#112240] pt-8 border-[#64ffda] md:pt-16">
                <MdOutlineEmail className="w-[50px] h-[50px]  mx-auto" />

                <div className="px-2  text-lg flex justify-center  items-center">
                  www.gmail.com
                </div>
              </div>
            </div>
            <div className=" md:w-1/2 mt-12 max-w-lg border-[2px] p-5 bg-[#112240] rounded-xl border-[#64ffda] mx-auto ">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                  <div>
                    <label className="font-medium">First name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Last name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-300  shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-300  shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Number</label>
                  <div className="relative mt-2">
                    <input
                      type="number"
                      placeholder=""
                      required
                      className="w-full  px-3 py-2 appearance-none bg-transparent outline-none border focus:border-sky-300  shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-sky-300  shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-black font-medium bg-[#64ffda] hover:bg-[#64ffda] active:bg-[#64ffda] rounded-lg duration-150">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <br></br>
      <hr />
    </>
  );
};
export default Contact;
