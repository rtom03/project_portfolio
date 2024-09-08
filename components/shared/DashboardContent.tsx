'use client'
import React from 'react'
import Header from './Header'
import FloatingDockDemo from './Floating'
const DashboardContent = () => {
    return (

        <div className='ml-40 p-10 '>

            <Header data='Hello There 👋 I"m Tom' subHeader="I'm a full-stack developer that loves building products and web apps that can impact millions of lives
              " sub="I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking." />
            <div className=''>
                <h3 className='text-2xl font-bold'>What i've been working on</h3>
            </div>
            <div>

                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default DashboardContent
