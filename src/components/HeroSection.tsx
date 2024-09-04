import React from 'react';
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";


const HeroSection = () => {
  return (
    <div className='min-h-screen h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 sm:mt-40 md:mt-20 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
          Unlock a Bright Tech Future
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Unlock endless opportunities with our comprehensive tech courses. Whether you&apos;re a beginner or a seasoned professional, we offer the tools and knowledge you need to thrive in today&apos;s digital world. Our hands-on approach ensures that you not only learn but also apply your skills in real-world scenarios, paving the way for a successful and fulfilling career.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>
              Check Out Courses
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;