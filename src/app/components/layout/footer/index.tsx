import dayjs from "dayjs";
import Logo from "../logo";

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <footer className="py-6  flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          <p className="text-primary">
            © {currentYear} Rubina ❤. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
