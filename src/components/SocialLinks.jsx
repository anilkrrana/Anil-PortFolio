import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    let social = [
        {
            id: 1,
            color: "bg-blue-600",
            child: (
                <>
                    Linkedin <FaLinkedin size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://www.linkedin.com/in/anil-rana-09a283227/",
        },
        {
            id: 2,
            color: "bg-gray-600",
            child: (
                <>
                    Github <FaGithub size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://github.com/anilkrrana",
        },
        {
            id: 3,
            color: "bg-red-600",
            child: (
                <>
                    Mail <AiOutlineMail size={30} className="ml-2 text-white" />
                </>
            ),
            link: "mailto:er.anilkrana@gmail.com",
        },
        {
            id: 4,
            color: "bg-blue-500",
            child: (
                <>
                    Twitter <FaTwitter size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://twitter.com/AnilKum64907224",
        },
        {
            id: 5,
            color: "bg-red-600",
            child: (
                <>
                    Instagram <FaInstagram size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://www.instagram.com/im_anil474/",
        },
        {
            id: 6,
            color: "bg-green-500",
            child: (
                <>
                    Resume <BsPersonLinesFill size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://drive.google.com/file/d/1HXXq4A3R32iKTN3g6_at9Q6XmcbWwBNz/view?usp=sharing",
        }
    ]
    return (
        <div>
            <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul >
                    {
                        social.map(({ id, color, child, link }) => {
                            return <li key={id} className={`flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 ${color} cursor-pointer`}><a className='flex text-white font-bold' href={link} download="true" target="_blank" >{child}</a></li>

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks