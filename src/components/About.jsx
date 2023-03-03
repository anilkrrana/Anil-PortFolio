import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full sm:h-screen bg-gradient-to-b py-[15%] from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" sm:mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm{" "}
          <span className="text-orange-400 text-1xl">frontend Developer</span>{" "}
          from Jharkhand, India, I build apps with a focus on{" "}
          <span className="text-orange-400 text-1xl">
           HTML5, CSS3, JavaScript, React.js, Redux
          </span>{" "}
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. A Software Engineer, who loves to solve problems.
        </p>

        <br />

        <p className="text-xl">
          I am having an experience of building high-performing, responsive,
          beautiful web applications to deliver a unique, intuitive user
          experience that works, also keen interest in UI/UX with some nice
          designing skills. I am a well-trained a teammate who loves to share
          ideas and prioritizes communication in order to achieve goals within
          the set deadlines. I enjoy being challenged and working on projects
          that require me to step outside of my comfort zone.
        </p>
      </div>
    </div>
  );
};

export default About;