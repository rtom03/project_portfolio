import React from 'react'
import Header from './Header'
import Shared from './Shared'
import Image from 'next/image'

const LatestWorkContent = () => {
    return (

        <div className='ml-32 '>
            <Header data='What I"ve Been Working On ⚡' />
            <Shared link='https://blog-xi-nine-14.vercel.app' header='CMS Blog Post Web Application' image='/image/img5.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
            <Shared link='https://fintech-bay-omega.vercel.app' header='Fintech Application' image='/image/img6.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
            <Shared link='https://intellectarium.vercel.app/' header='Education Management System' image='/image/img7.webp' span={"Build a robust fintech application to make digital trasaction around the globe"} />
            <Shared link='https://blog-xi-nine-14.vercel.app' header='Mern Stack Web Application' image='/image/img9.png' span={"Build a robust fintech application to make digital trasaction around the globe"} />
            <br /><br />
        </div>
    )
}

export default LatestWorkContent
