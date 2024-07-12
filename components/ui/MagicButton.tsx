import React from 'react'

const MagicButton = ({ 
  title, icon, position, handleClick, otherClasses
}: {
  title: string, icon: React.ReactNode, position: string, handleClick?: () => void, otherClasses?: string
}) => {
  return (
    <button onClick={handleClick} className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 hover:scale-110 duration-500 transition-all">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FF99_0%,#000000_50%,#00FF99_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton