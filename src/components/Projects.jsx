import React from 'react'
import PortFolio from '../assets/PortFolio.png'
import TravelEase from '../assets/TravelEase.png'
import Qrcode from '../assets/Qr-code-generator.png'
import MemeGenerator from '../assets/meme-generator.png'
import LandingPage from '../assets/landing-page.png'
import YoutubeClone from '../assets/youtube-clone.png'



const Projects = () => {
  const projects = [
    {
      id: 1,
      image: PortFolio,
      demoLink: 'https://anil-port-folio.vercel.app/',
      codeLink: 'https://github.com/anilkrrana/Anil-PortFolio',
    },
    {
      id: 2,
      image: YoutubeClone,
      demoLink: 'https://youtube-clone-anilkrrana.vercel.app/',
      codeLink: 'https://github.com/anilkrrana/youtube_clone',
    },
    {
      id: 3,
      image: TravelEase,
      demoLink: 'https://codesandbox.io/s/github/anilkrrana/React-Tour-Travel-Website',
      codeLink: 'https://github.com/anilkrrana/React-Tour-Travel-Website',
    },
    {
      id: 4,
      image: LandingPage,
      demoLink: 'https://landing-page-animate-on-scroll.vercel.app',
      codeLink: 'https://github.com/anilkrrana/Landing_page_animate_on_scroll',
      },
    {
      id: 5,
      image: Qrcode,
      demoLink: 'https://anilkrrana.github.io/QR-code-generator/',
      codeLink: 'https://github.com/anilkrrana/QR-code-generator',
    },
    {
      id: 6,
      image: MemeGenerator,
      demoLink: '#',
      codeLink: '',
    },
    
    // {
    //   id: 6,
    //   image: YoutubeClone,
    //   demoLink: '#',
    //   codeLink: '',
    //   },
  ]


  return (
    <div
      name='Projects'
      className='bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white'
    >
      <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, image, demoLink, codeLink}) => {
            return (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={demoLink} target='_blank'>
                  <img 
                    src={image} 
                    alt="project-images" 
                    className='rounded-md duration-200 hover:scale-105' 
                  />
                </a>

                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500'>
                    {" "}
                    <a href={demoLink} target='_blankk'>
                      Demo
                    </a>
                  </button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500'>
                    <a href={codeLink} target='_blank'>
                      Code
                    </a>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects