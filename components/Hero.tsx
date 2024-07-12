import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Photo from './Photo'
import ShimmerButton from './ui/ShimmerButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-6'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='green' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='green' />
      </div>

      <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center" />
      </div>
    
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[90vw] flex flex-co l items-center justify-center'>
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left order-2 xl:order-none">
                <TextGenerateEffect 
                  words=' Hi, I&apos;m João, a Software Developer from Portugal' 
                  className='text-[40px] md:text-5xl lg:text-6xl mr-4 xl:text-left' 
                /> 
              </div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
            </div>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl sm:py-10 md:py-8 xl:py-4 py-6'>
                Welcome to my Portfolio Website!
              </p>
              <div className='md:mt-14'>
                <a href="#projects">
                  <ShimmerButton text='Show my work' />
                </a>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero