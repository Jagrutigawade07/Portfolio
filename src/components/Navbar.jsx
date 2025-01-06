import React from 'react';
import pic from "../../public/Jagruti_Photograph.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import {Link} from "react-scroll";
function Navbar() {
    const [menu, setMenu] = React.useState(false);
    const navItems = [{
        id: 1,
        text: "Home"
    },
    {
        id: 2,
        text: "About"
    },
    {
        id: 3,
        text: "Portfolio"
    },
    {
        id: 4,
        text: "Skills"
    },
    {
        id: 5,
        text: "Contact"
    },
    ];
  return (
    <>
        <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 h-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex justify-between items-center h-20 '>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="profile pic" />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        Jagruti <span className='text-green-500 text-2xl'>Gawade</span>
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>

                <div>
                    <ul className='hidden md:flex space-x-8'>
                    {navItems.map(({id, text}) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                            <Link to=
                            {text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">
                            {text}</Link>
                        </li>
                    ))    
                    }
                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden'>

                    {menu ? <IoMdCloseCircle size={20}/> : <GiHamburgerMenu size={20}/>}                    </div>
                </div>    
            </div>
            {menu && (
            <div className='bg-white'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                {
                    navItems.map(({id, text}) => (
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                            <Link onClick={() => setMenu(!menu)} to=
                            {text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">
                            {text}</Link>                            </li>
                    ))    
                }
                </ul>
            </div>
            )}
        </div>
    </>
  )
}

export default Navbar;
