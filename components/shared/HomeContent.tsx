'use client'
import React from 'react'
import Header from './Header'
import FloatingDockDemo from './Floating'
import Image from 'next/image'
import Link from 'next/link'
import Shared from './Shared'
const HomeContent = () => {
    return (

        <div className='flex flex-col ml-32   '>

            <Header data='Hello There 👋 I"m Tom' subHeader="I'm a full-stack developer that loves building products and web apps that can impact millions of lives
              " sub="I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking." />

            <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>What i've been working on</h3>
                <Shared link='https://blog-xi-nine-14.vercel.app' header='CMS Blog Post Web Application' image='/image/img5.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
                <Shared link='https://fintech-bay-omega.vercel.app' header='Fintech Application' image='/image/img6.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
                <Shared link='https://intellectarium.vercel.app/' header='Education Management System' image='/image/img7.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
                <Shared link='https://blog-xi-nine-14.vercel.app' header='Mern Stack Web Application' image='/image/img9.png' span={"Build a robust fintech application to make digital trasaction around the globe"} />
            </div>
            <div className='mt-10'>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default HomeContent
