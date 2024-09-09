'use client'
import React from 'react'
import Header from './Header'
import FloatingDockDemo from './Floating'
import Image from 'next/image'
const HomeContent = () => {
    return (

        <div className='flex flex-col ml-48 p-10 justify-center '>

            <Header data='Hello There 👋 I"m Tom' subHeader="I'm a full-stack developer that loves building products and web apps that can impact millions of lives
              " sub="I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking." />
            <div className='flex flex-col'>
                <h3 className='text-2xl font-bold'>What i've been working on</h3>
                <div className='flex flex-row hover:bg-gray-200 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/auth-image.svg"
                        alt='/'
                        width={150}
                        height={100}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>Fintech Application</h2><br />
                        <span className='text-xs'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <h3 className='text-xs font-bold'>NextJs,Typescript,Tailwindcss</h3>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-200 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/auth-image.svg"
                        alt='/'
                        width={150}
                        height={100}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>Fintech Application</h2><br />
                        <span className='text-xs'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <h3 className='text-xs font-bold'>NextJs,Typescript,Tailwindcss</h3>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-200 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/auth-image.svg"
                        alt='/'
                        width={150}
                        height={100}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>Fintech Application</h2><br />
                        <span className='text-xs'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <h3 className='text-xs font-bold'>NextJs,Typescript,Tailwindcss</h3>
                    </div>

                </div>
                <div className='flex flex-row hover:bg-gray-200 p-4 rounded-md w-[750px] gap-5'>
                    <Image
                        src="/image/auth-image.svg"
                        alt='/'
                        width={150}
                        height={100}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold '>Fintech Application</h2><br />
                        <span className='text-xs text-slate-300'>Build a robust fintech application to make digital trasaction around the globe</span>
                        <br /><br /><br />
                        <h3 className='text-xs font-bold'>NextJs,Typescript,Tailwindcss</h3>
                    </div>
                </div>
                <FloatingDockDemo />

            </div>
            <div>


            </div>
        </div>
    )
}

export default HomeContent
