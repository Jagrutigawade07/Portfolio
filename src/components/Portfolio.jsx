import React from 'react'
import react from '../../public/images.png'
import html from '../../public/download.png'

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: react,
      name: 'React',
    },
    {
      id: 2,
      logo: html,
      name: 'HTML',
    },
  ]
  return (
    <div name='Portfolio' className='max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Pojects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {
              cardItems.map(({id, logo, name}) => (
                <div key={id} className='md:w-[300px] md:h-[380px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 p-4 mb-5'>
                    <img src={logo} className='w-[120px] h-[120px] rounded-full border-[5px]'/>
                  <div>
                   <p className='text-gray-700 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat veritatis nemo magni voluptati</p>
                  </div>
                  <br />
                  <div className='flex space-x-4'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Sorce code</button>
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
