import React from 'react'

const HeroSection = ({title,description}) => {
  return (
    

<section className="bg-neutral-primary mt-16 bg-[url('/hero-section.webp')] dark:bg-[url('/hero-section.webp')]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-8 text-base font-normal text-body md:text-xl">{description}</p>
        <form  className='relative flex flex-col'>
          <input id='temp1' className='min-w-md h-12 my-4 px-6 bg-amber-50 text-black  rounded-4xl focus:outline-none placeholder:text-center placeholder:pr-18' placeholder="Search through thousands of movies" type="text"></input>
          <button dir="rtl" className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 bg-linear-to-r from-emerald-300 to-cyan-400 text-while  rounded-4xl' type="submit" >Search</button>
        </form>
    </div>
    {/* <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}
</section>

  )
}

export default HeroSection