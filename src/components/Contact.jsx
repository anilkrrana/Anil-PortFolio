import React, {useState} from 'react'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all the required fields!');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Your code to submit the form goes here
      console.log(formData);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

      let social = [
          {
              id: 1,
              color: 'bg-blue-600',
              child: (
                  <>
                      <FaLinkedin size={30} className="ml-2 text-white" />
                  </>
              ),
              link: "https://www.linkedin.com/in/anil-rana-09a283227/",
          },
          {
              id: 2,
              color: 'bg-gray-600',
              child: (
                  <>
                      <FaGithub size={30} className="ml-2 text-white" />
                  </>
              ),
              link: "https://github.com/anilkrrana",
          },
          {
              id: 3,
              color: "bg-red-600",
              child: (
                <>
                  <AiOutlineMail size={30} className="ml-2 text-white" />
                </>
              ),
              link: "mailto:er.anilkrana@gmail.com",
            },
            {
              id: 4,
              color: "bg-blue-500",
              child: (
                <>
                  <FaTwitter size={30} className="ml-2 text-white" />
                </>
              ),
              link: "https://twitter.com/AnilKum64907224",
            },
            {
              id: 5,
              color: "bg-green-500",
              child: (
                <>
                  <BsPersonLinesFill size={30} className="ml-2 text-white" />
                </>
              ),
              link: "https://drive.google.com/file/d/12XCS0JOke_RtRAjh2UD2Qjp254bqpfDt/view?usp=sharing",
            },
      ];

    return (
      <div
          name="Contact"
          className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 pt-24"
      >
          <div className=" md:hidden flex justify-center items-center bottom-[35%]">
              <ul className="flex justify-center items-center">
              {social.map(({ id, color, child, link }) => {
                  return (
                  <li
                      key={id}
                      className={`flex justify-center items-center h-1/1 mt-[-10%] py-3 px-2  hover:rounded-md hover:mt-[-15%] duration-500 ${color} cursor-pointer`}
                  >
                      <a
                      className="flex text-white font-bold"
                      href={link}
                      download="true"
                      target="_blank"
                      >
                      {child}
                      </a>
                  </li>
                  );
              })}
              </ul>
          </div>

          <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
          <div className="pb-2">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>

            <p className='py-2'>Submit the form below to get in touch with me</p>
          </div>

          <div className='flex justify-center items-center'>
              <form 
                  onSubmit={handleSubmit}
                  action='https://getform.io/f/672d5e29-03f4-47c5-aae6-88ed1c86791c'
                  method='POST'
                  className='flex flex-col w-full md:w-3/3'
              >
                  <input 
                      type='text'
                      name='name'
                      placeholder='Enter your name'
                      onChange={handleInputChange}
                      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                  />

                  <input 
                      type='text'
                      name='email'
                      placeholder='Enter your email'
                      onChange={handleInputChange}
                      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' 
                  />

                  <textarea
                      name='message'
                      placeholder='Enter your message'
                      rows='8'
                      onChange={handleInputChange}
                      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                  ></textarea>

                  <button className='text-white bg-gradient-to-b from-purple-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold' 
                      onChange={handleInputChange}>
                      Let's talk
                  </button>
              </form>
          </div>
          </div>
      </div>
    )
  }

export default Contact