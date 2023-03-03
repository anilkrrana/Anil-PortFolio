import React, { useState } from 'react'
import { Link } from "react-scroll"
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
  let links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "EdSkills",
    },
    {
      id: 5,
      link: "Blogs",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];

  const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-16  px-4 z-10 bg-black text-white fixed'>
      <div>
        <h1 className="text-5xl font-signature ml-2 mt-3 hover:text-orange-400 duration-500"><a href="#">Anil-Rana</a></h1>
      </div>


      <ul className='hidden md:flex'>
        {
          links.map(({ id, link }) => {
            return <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-orange-500 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>

          })
        }
      </ul>

      <div onClick={() => { setNav(!nav) }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden ">{
          nav ? <FaTimes fontSize={30} /> : <FaBars fontSize={30} />
        }
      </div>

      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {
            links.map(({ id, link }) => {
              return <li key={id} className="px-4 cursor-pointer capitalize text-3xl py-5 hover:scale-105 hover:text-orange-500 duration-200"><Link onClick={() => { setNav(!nav) }} to={link} smooth duration={500}>{link}</Link></li>
            })
          }
        </ul>
      )}

    </div>
  )
}

export default Navbar