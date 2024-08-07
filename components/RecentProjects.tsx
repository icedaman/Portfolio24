import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-[#00ff99]'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 3xl:gap-y-40'>
        {projects.map(({ id, title, des, img, iconLists, link })=> (
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                <img src={img} alt={title} className='z-10 absolute bottom-0'/>
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, i)=> (
                    <div className='border border-green-900 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                      key={icon}
                      style={{transform: `translateX(-${5 * i * 2}px)`}}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center hover:underline hover:text-[#00ff99]'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-[#00ff99]'>
                    <a href={link} target="_blank" rel="noopener noreferrer">Check Live Site</a>
                  </p>
                  <FaLocationArrow className='ms-3' color='#00ff99' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects