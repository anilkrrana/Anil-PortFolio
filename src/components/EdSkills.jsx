import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiCanva, SiExpress, SiFigma, SiGit, SiGithub, SiJavascript, SiNodedotjs, SiRedux, SiTailwindcss } from 'react-icons/si'

const EdSkill = () => {

    const skills = [
        {
            id: 1,
            name: "HTML",
            shadow: "text-orange-600",
            shadow1:"shadow-orange-600",
            style: (
                <>
                    <FaHtml5 size={80} />
                </>
            )
        },
        {
            id: 2,
            name: "CSS",
            shadow: "text-blue-500",
            shadow1:"shadow-blue-500",
            style: (
                <>
                    <FaCss3 size={80} />
                </>
            )
        },
        {
            id: 3,
            name: "JavaScript",
            shadow: "text-yellow-600",
            shadow1:"shadow-yellow-600",
            style: (
                <>
                    <SiJavascript size={80} />
                </>
            )
        },
        {
            id: 4,
            name: "React",
            shadow: "text-blue-600",
            shadow1:"shadow-blue-600",
            style: (
                <>
                    <FaReact size={80} />
                </>
            )
        },
        {
            id: 5,
            name: "Redux",
            shadow: "text-purple-500",
            shadow1:"shadow-purple-500",
            style: (
                <>
                    <SiRedux size={80} />
                </>
            )
        },
        // {
        //     id: 6,
        //     name: "Node Js",
        //     shadow: "text-green-500",
        //     shadow1:"shadow-green-500",
        //     style: (
        //         <>
        //             <SiNodedotjs size={80} />
        //         </>
        //     )
        // },
        // {
        //     id: 7,
        //     name: "Express",
        //     shadow: "text-gray-600",
        //     shadow1:"shadow-gray-600",
        //     style: (
        //         <>
        //             <SiExpress size={80} />
        //         </>
        //     )
        // },
        {
            id: 8,
            name: "BootStrap",
            shadow: "text-purple-500",
            shadow1:"shadow-purple-500",
            style: (
                <>
                    <FaBootstrap size={80} />
                </>
            )
        },
        {
            id: 9,
            name: "Tailwind",
            shadow: "text-blue-500",
            shadow1:"shadow-blue-500",
            style: (
                <>
                    <SiTailwindcss size={80} />
                </>
            )
        },
        {
            id: 10,
            name: "Git",
            shadow: "text-orange-500",
            shadow1:"shadow-orange-500",
            style: (
                <>
                    <SiGit size={80} />
                </>
            )
        },
        {
            id: 11,
            name: "GitHub",
            shadow: "text-gray-600",
            shadow1:"shadow-gray-600",
            style: (
                <>
                    <SiGithub size={80} />
                </>
            )
        },
        {
            id: 12,
            name: "Figma",
            shadow: "text-pink-600",
            shadow1:"shadow-pink-600",
            style: (
                <>
                    <SiFigma size={80} />
                </>
            )
        },
        {
            id: 12,
            name: "Canva",
            shadow: "text-pink-600",
            shadow1:"shadow-pink-600",
            style: (
                <>
                    <SiCanva size={80} />
                </>
            )
        },


    ]

    return (
        <div name="EdSkills" className="w-full sm:h-screen md:h-screen sm:py-[40%] pt-[15%] bg-gradient-to-b from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full text-white">

                <div className="pb-1">
                    <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
                        Experience
                    </p>
                    <p className="p-6">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        skills.map(({ id, name, shadow, shadow1, style }) => {

                          return  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${shadow1}`}>
                                <li className={`m-5 w-20 mx-auto ${shadow}`}>{style}</li>
                                <p className="mt-4">
                                    {name}
                                </p>
                            </div>
                        })
                    }


                </div>

            </div>

        </div>
    );
};

export default EdSkill;