import AboutContent from '@/components/shared/AboutContent'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col absolute ml-96 mt-20 h-screen'>
            <h1>Dashboard</h1>
            <div>
                <AboutContent />
            </div>
        </div>
    )
}

export default About
