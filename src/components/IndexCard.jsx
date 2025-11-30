import React from 'react'

const IndexCard = ({ title, subtitle, color, icon }) => {
    return (
        <section className='flex flex-col items-center text-center space-y-1'>
            <svg aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="films"
                className={`max-w-[40px] sm:max-w-[45px] ${color} items-center`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path fill="currentColor"
                    d={icon}></path></svg>
            <h1 className={`${color} text-sm md:text-base line-clamp-1`}>
                {title}
            </h1>
            <p className='max-w-[320px] text-center md:line-clamp-3 text-xs md:text-sm'>
                {subtitle}
            </p>
        </section>
    )
}

export default IndexCard