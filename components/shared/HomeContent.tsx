'use client'
import React from 'react'
import Header from './Header'
import FloatingDockDemo from './Floating'
import Image from 'next/image'
import Link from 'next/link'
const HomeContent = () => {
    return (

        <div className='flex flex-col ml-48 p-10 justify-center '>

            <Header data='Hello There 👋 I"m Tom' subHeader="I'm a full-stack developer that loves building products and web apps that can impact millions of lives
              " sub="I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking." />
            <div className='flex flex-col mt-14'>

                <h3 className='text-xl font-bold'>What i've been working on</h3>
                <div className='flex flex-row hover:bg-gray-100 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/img9.png"
                        alt='/'
                        width={150}
                        height={100}
                        className='rounded-md'
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>Fintech Application</h2><br />
                        <span className='text-xs text-gray-500'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <div className='flex flex-row items-center w-[520px] justify-between mt-8'>
                            <h3 className='text-xs font-bold text-gray-500'>NextJs,Typescript,Tailwindcss</h3>
                            <h3 className='bg-black rounded-md p-2 text-white w-24 text-xs font-bold'>View Project</h3>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-100 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/img8.png"
                        alt='/'
                        width={150}
                        height={100}
                        className='rounded-md'
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>Fintech Application</h2><br />
                        <span className='text-xs text-gray-500'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <div className='flex flex-row items-center justify w-[520px] justify-between mt-8'>
                            <h3 className='text-xs font-bold text-gray-500'>NextJs,Typescript,Tailwindcss</h3>
                            <h3 className='bg-black rounded-md p-2 text-white w-24 text-xs font-bold'>View Project</h3>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-100 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/img5.webp"
                        alt='/'
                        width={150}
                        height={100}
                        className='rounded-md'
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold '>Fintech Application</h2><br />
                        <span className='text-xs text-gray-500'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <div className='flex flex-row items-center justify-between w-[520px] mt-8'>
                            <h3 className='text-xs font-bold text-gray-500'>NextJs,Typescript,Tailwindcss</h3>
                            <Link href="https://fintech-bay-omega.vercel.app">
                                <h3 className='bg-black rounded-md p-2 text-white w-24 text-xs font-bold'>View Project</h3>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-100 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/img6.webp"
                        alt='/'
                        width={150}
                        height={150}
                        className='rounded-md'
                    />

                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold '>Fintech Application</h2><br />
                        <span className='text-xs text-gray-500'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <div className='flex flex-row items-center justify-between w-[520px] mt-8'>
                            <h3 className='text-xs font-bold text-gray-500'>NextJs,Typescript,Tailwindcss</h3>
                            <h3 className='bg-black rounded-md p-2 text-white w-24 text-xs font-bold'>View Project</h3>
                        </div>
                    </div>
                </div>
                <br />
                <div className='mt-10'>
                    <FloatingDockDemo />
                </div>

            </div>
            <div>


            </div>
        </div>
    )
}

export default HomeContent
