import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Jun 2024 - Sep 2024",
      title: "React Developer Intern",
      company: "Munal IT Solution, Chagunarayan, Bhaktapur",
      type: "Internship",
      description:
        "Built responsive UI using React, Redux, and TailwindCSS. Collaborated in Agile teams and contributed to code reviews and Git workflows.",
    },
    {
      year: "Nov 2024 - Jun 2025",
      title: "Freelance Full Stack Developer",
      company: "Freelance Projects",
      type: "Contract",
      description:
        "Developed full-stack web apps with React, Next.js, Node.js, and MongoDB, designing front-end interfaces and backend APIs for clients.",
    },
    {
      year: "Jul 2025 - Present",
      title: "Full Stack Developer",
      company: "BizHub Consulting Service Pvt. Ltd",
      type: "Full-time",
      description:
        "Working on enterprise web applications using React, Next.js, Node.js, and MongoDB. Delivering scalable solutions in collaboration with on-site teams.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="inline-block pb-7 mb-9 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-3">
              Experience
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full"></div>
          </div>
          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal text-primary">
                    {exp.title}
                  </h4>
                </div>

                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === experiences.length - 1
                          ? "border-primary"
                          : "border-black"
                      }`}
                    >
                      {index === experiences.length - 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal text-primary">
                      {exp.type}
                    </p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base text-justify text-gray-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
