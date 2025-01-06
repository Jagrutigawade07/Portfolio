import React from 'react'
import react from '../../public/images.png'
import C from '../../public/C.png'
import Cplus from '../../public/C++.png'
import Java from '../../public/Java.png'
import MONGO from '../../public/MONGO.png'
import SQL from '../../public/SQL.png'
import Tailwind from '../../public/Taiwind CSS.png'
import html5 from '../../public/html5.png'
import css from '../../public/css.png'
import bootstrap from '../../public/Bootstrap.jpg'
import javascript from '../../public/javascript.jpg'
function Portfolio() {
  const cardItems = [
    {
        id: 1,
        logo: C,
        name: 'C',
      },
      {
        id: 2,
        logo: Cplus,
        name: 'C++',
      },
      {
        id: 1,
        logo: Java,
        name: 'Java',
      },
      {
          id: 3,
          logo: html5,
          name: 'HTML',
        },
        {
            id:4,
            logo: css,
            name: 'css',
        },
        {
            id:5,
            logo: javascript,
            name: 'JavaScript',
        },
        {
          id: 6,
          logo: react,
          name: 'React',
        },
      {
        id: 7,
        logo: bootstrap,
        name: 'Bootstrap',
      },
      {
        id: 8,
        logo: Tailwind,
        name: 'Tailwind CSS',
      },
      {
        id: 9,
        logo: SQL,
        name: 'SQL',
      },
      {
        id: 10,
        logo: MONGO,
        name: 'MongoDB',
      },
  ]
  return (
    <div name='Skills'
     className='max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Skills</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 my-5'>
            {
              cardItems.map(({id, logo, name}) => (
                <div key={id} className='md:w-[180px] md:h-[190px] rounded-lg border-[2px] h-48 w-44 shadow-lg cursor-pointer hover:scale-110 duration-300 p-5 mb-5'>
                    <img src={logo} className=' flex flex-col items-ceterw-[150px] h-[150px] rounded-lg border-[2px]'/>
                  <div>
                   <div className="text-blue-600/0 hover:text-blue-600/100 hover:bg-blue-600/20 text-white font-bold text-center text-xl"> {name}</div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
