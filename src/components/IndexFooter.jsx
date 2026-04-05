import React from 'react'

const IndexFooter = () => {
    return (
        <footer>
            <div className="h-[3px] w-full 
                bg-[linear-gradient(90deg,#c02942,#a7dbd7,#0297a3,#668301,#f26c24,#c02942)] 
                bg-[length:200%_100%] 
                animate-[gradient_5s_linear_infinite]">
            </div>
            <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-8 text-white">
                <div className="md:flex md:items-center md:justify-between">
                    <a href="/" className="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-7" alt="Filmopedia Logo" />
                        <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Filmopedia</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                        <li>
                            <a href="/documentation" className="hover:underline hover:text-secondary-color-2-500 me-4 md:me-6">Documentation</a>
                        </li>
                        <li>
                            <a href="https://github.com/MrAliBilal" className="hover:underline hover:text-secondary-color-2-500 me-4 md:me-6">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mralibilal/" className="hover:underline hover:text-secondary-color-2-500 me-4 md:me-6">Linkedin</a>
                        </li>
                        <li>
                            <a href="mailto:MrAliBilal@outlook.com" className="hover:underline hover:text-secondary-color-2-500 me-4 md:me-6">Email</a>
                        </li>
                        <li>
                            <a href="https://github.com/MrAliBilal/Filmopedia" className="hover:underline hover:text-secondary-color-2-500 me-4 md:me-6">Source Code</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline hover:text-secondary-color-2-500">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-default text-gray-300 sm:mx-auto lg:my-8" />
                <span className=" block text-sm font-medium sm:text-center">Designed & Developed by <a href="https://alibilal.online/" className="font-[Sora] tracking-wider font-bold hover:underline hover:text-secondary-color-2-500">Ali Bilal</a></span>

        </div>
        </footer >
    )
}

export default IndexFooter
