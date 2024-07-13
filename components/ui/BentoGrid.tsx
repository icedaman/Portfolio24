"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  titleClassName,
  img,
  imgClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('joao.alegria45@gmail.com');
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-green-900",
        className
      )}
      style={{
        background: "zinc-950",
        backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 53%, rgba(0,255,149,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center' )} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && <img src={spareImg} alt={spareImg} className={ 'object-cover object-center w-full h-full' } />}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center font-bold text-white" /> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={`${id === 1 && 'max-w-[20vh]' } ${id === 3 && 'lg:text-lg xl:text-3xl' } font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
            {title}
          </div>
          {id === 1 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'React Native'].map((item)=>(
                  <span key={item} className="px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {['Node.js', 'MongoDB', 'PHP', 'JavaScript'].map((item)=>(
                  <span key={item} className="px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 `}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}/>
              </div>
              <MagicButton 
                title={copied? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
