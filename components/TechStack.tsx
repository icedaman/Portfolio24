import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const imgArrLogos = ['html', 'css', 'js', 'react', 'next', 'ts', 'tailwind', 'node', 'graphql', 'styled', 'material', 'mysql']

const TechStack = () => {
  return (
    <div className='py-20' id='experience'>
      <h1 className='heading'>
        My 
        <span className='text-[#00ff99]'> Tech Stack</span>
      </h1>
      <div className="flex flex-col items-center pt-20">
        <InfiniteMovingCards
          items={imgArrLogos}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  )
}

export default TechStack
