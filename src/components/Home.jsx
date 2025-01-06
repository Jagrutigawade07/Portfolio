import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { ReactTyped,Typed } from "react-typed";

import pic from "../../public/Jagruti_Photograph.png";

function Home() {
  return (
    <>
      <div
      name='Home' 
      className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row text-center'>
            <div className='mt-12 md:mt-24 md:w-1/2 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello, I'm a</h1>
                <ReactTyped className='text-red-700 font-bold'
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
            <h2 className='text-xl'>Discover My Work</h2>
            Step into a world of innovative solutions and seamless designs. Explore my portfolio to see how I bring ideas to life through dynamic applications and user-focused development. Whether it's building robust full-stack solutions, crafting intuitive interfaces, or solving real-world challenges with technology, my work reflects my dedication to excellence.            </p>
            <div className='flex flex-col items-center md:flex-row justify-between md:space-y-6 space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-bold '>Available on</h1>
                <ul className='flex space-x-5'>
                    <li>
                        <a href="https://web.telegram.org/a/" target='_blank'>
                            <FaTelegram className='text-2xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Jagrutigawade07" target='_blank'>
                            <FaGithubSquare className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jagruti-gawade " target='_blank'>
                            <FaLinkedin className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        </a>
                        </li>
                </ul>
            </div>
            <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <div className='flex space-x-5'>
                    <RiTailwindCssLine className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                    <TbBrandRedux className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                    <GrReactjs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>
                    <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <IoLogoNodejs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                </div>
            </div>
                </div>
        </div>
        
        <div className='md:w-1/2 md:ml-48  md:mt-20 mt-8 ml-24 order-1'>
            <img src={pic} className='rounded-full md:w-[380px] md:h-[450px]' alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  );
}

export default Home;
