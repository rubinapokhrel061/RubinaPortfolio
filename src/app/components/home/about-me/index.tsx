import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 200">
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: "#0077FF" }} />
                <stop offset="50%" style={{ stopColor: "#AA40FF" }} />
                <stop offset="100%" style={{ stopColor: "#FF00FF" }} />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Arial Black, Arial, sans-serif"
              fontSize="150"
              fontWeight="500"
              fill="url(#textGradient)"
            >
              FULL STACK DEVELOPER
            </text>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-3">
                About Me
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full"></div>
            </div>
            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p className="text-base sm:text-lg leading-relaxed text-justify text-slate-700">
                  Hi, I’m <strong>Rubina Pokhrel</strong>, a Full Stack
                  Developer from Nepal, currently in the final semester of{" "}
                  <strong>BSc CSIT</strong>. I specialize in building scalable,
                  responsive, and high-performance web applications using modern
                  technologies. I enjoy solving real-world problems through
                  clean code, efficient system design, and secure web solutions.
                </p>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify text-slate-700">
                  I am eager to contribute to innovative projects where I can
                  apply my skills, collaborate with talented teams, and grow
                  professionally in real-world tech environments.
                </p>

                <div className="pt-10 xl:pt-14 flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/tech-stack.jpg")}
                      alt="tech-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black font-semibold">
                      Tech Stack
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "React Native",
                      "Next.js",
                      "Node.js",
                      "Python",
                      "Redux",
                      "TailwindCSS",
                      "Firebase",
                      "WebSockets",
                      "JWT",
                      "Multer",
                      "Docker",
                      "MySQL",
                      "MongoDB (Mongoose)",
                      "Teamwork",
                    ].map((tech) => (
                      <p
                        key={tech}
                        className="bg-white py-2  px-4 rounded-full text-sm md:text-base font-medium shadow-sm"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
