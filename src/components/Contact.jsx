import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userData = {
      firstname: data.firstname,
      lastname: data.firstname,
      email: data.email,
      message: data.message,
      number: data.number,
    };
    try {
      await axios.post("https://getform.io/f/pbqgdjrb", userData),
        toast.success("your message send sucessfully");
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };
  return (
    <>
      <div id="contact" className="w-full h-screen sm:h-screen "></div>
      <div className=" mx-10 ">
        <div className="max-w-lg mx-auto mt-16 lg:mt-4 sm:mt-1 text-center">
          <h1 className="font-semibold text-base  top-5  text-[#2f9997] inline border-b-2 border-gray-400">
            CONTACT ME
          </h1>
        </div>
        <div className="  mt-12 max-w-lg p-5 bg-[#dbe7e7] dark:bg-[#112240] rounded-xl mx-auto ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  {...register("firstname", { required: true })}
                  type="text"
                  name="firstname"
                  required
                  className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-[#2f9997] border-[#44c2bf] shadow-sm rounded-lg"
                />
                {errors.firstname && <span>This field is required</span>}
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  {...register("lastname", { required: true })}
                  type="text"
                  name="lastname"
                  required
                  className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-[#2f9997] border-[#44c2bf] shadow-sm rounded-lg"
                />
                {errors.lastname && <span>This field is required</span>}
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                required
                className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-[#2f9997] border-[#44c2bf] shadow-sm rounded-lg"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label className="font-medium">Number</label>
              <input
                type="number"
                name="number"
                {...register("number", { required: true })}
                required
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-[#2f9997] border-[#44c2bf] shadow-sm rounded-lg"
              />
              {errors.number && <span>This field is required</span>}
            </div>

            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                {...register("message", { required: true })}
                name="message"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#2f9997] shadow-sm rounded-lg border-[#44c2bf]"
              >
                {errors.message && <span>This field is required</span>}
              </textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-black font-medium bg-[#2f9997] hover:bg-[#248786]  rounded-lg duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* </div> */}
      </div>

      <br></br>
    </>
  );
};
export default Contact;
