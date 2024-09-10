'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    IconAlien,
    IconArrowLeft,
    IconArticle,
    IconBolt,
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTabler,
    IconBrandTwitter,
    IconContrastFilled,
    IconFile,
    IconHome,
    IconMessage,
    IconSettings,
    IconSubtask,
    IconUserBolt,
    IconX,
} from "@tabler/icons-react";
import HomeContent from './shared/HomeContent';
import AboutContent from './shared/AboutContent';
import Image from 'next/image';
import Biography from './shared/Biography';
import ContactContent from './shared/ContactContent';
import Articles from './shared/Articles';
import LatestWorkContent from './shared/LatestWorkContent';
import WorkHistory from './shared/WorkHistory';
import { div } from 'framer-motion/client';
import { SidebarLink } from './ui/sidebar';
import Link from 'next/link';

const Landing = () => {
    const [showSingle, setShowSingle] = useState(true);
    const social = [
        {
            label: 'Github',
            href: 'https://github.com/rtom03',
            icon: (<IconBrandGithub color="gray" />)
        },
        {
            label: 'Linkdln',
            href: 'https://www.linkedin.com/in/tomiwa-raheem-33233a324/',
            icon: (<IconBrandLinkedin color="gray" />)
        }, {
            label: 'Instagram',
            href: '',
            icon: (<IconBrandInstagram color="gray" />)
        }, {
            label: 'X/Twitter',
            href: '',
            icon: (<IconBrandTwitter color="gray" />)
        },
    ]
    return (
        <div>
            <Tabs defaultValue="account" className="flex flex-row w-screen ">

                <TabsList className='flex flex-col w-[200px] bg-gray-100 border-r-2 h-screen p-10 gap-6  text-sm font-medium fixed  sm:w-[150px] md:w-[100px]  lg:w-[200px] '>
                    <div className='flex flex-row items-center gap-2'>
                        <Image
                            src='/image/rtom.jpeg'
                            alt='/'
                            width={100}
                            height={100}
                            className="h-7 w-7 flex-shrink-0 rounded-full"
                        />
                        <div className='flex flex-col '>
                            <h3 className='hidden lg:flex'>rtom</h3>
                            <h3 className=' hidden lg:text-xs'> Developer</h3>

                        </div>
                    </div>
                    <div className=' hover:none lg:flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="home" onClick={() => setShowSingle(true)} className='flex gap-1 items-center'> <IconBolt className='hover:text-blue-400 ' /><h2 className='hidden lg:flex '>Home</h2></TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="about" onClick={() => setShowSingle(false)} className='flex  gap-1 items-center'> <IconUserBolt className='hover:text-blue-400' />
                            <h2 className='hidden lg:flex'>About</h2></TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="projects" onClick={() => setShowSingle(false)} className='flex  gap-1 items-center'> <IconContrastFilled className='hover:text-blue-400' />
                            <h2 className='hidden lg:flex'>Projects</h2></TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="contact" onClick={() => setShowSingle(false)} className='flex  gap-1 items-center'><IconMessage className='hover:text-blue-400' />
                            <h2 className='hidden lg:flex'>Contact</h2></TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="articles" onClick={() => setShowSingle(false)} className='flex  gap-1 items-center'> <IconArticle className='hover:text-blue-400' />
                            <h2 className='hidden lg:flex'>Articles</h2 ></TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <TabsTrigger value="biography" onClick={() => setShowSingle(false)} className='hidden lg:flex  gap-1 items-center'> <IconBrandTabler className='hover:text-blue-400' />
                            <h2 className='hidden lg:flex'>Biography</h2></TabsTrigger>
                    </div>
                    <div className="mt-8 flex flex-col gap-2">
                        <h1 className=' hidden lg:text-center font-bold'>Socials</h1>
                        <hr />

                        <div className='flex flex-col gap-5'>
                            <Link href="https://github.com/rtom03" className='flex items-center gap-2'>

                                <IconBrandGithub color="gray" />
                                <h3 className='hidden lg:flex text-black font-bold'>Github</h3>
                            </Link>
                            <Link href='https://www.linkedin.com/in/tomiwa-raheem-33233a324/' className='flex items-center gap-2'>
                                <IconBrandLinkedin color="#0077B5" />
                                <h3 className='hidden lg:flex text-blue-500 font-bold'>Linkdln</h3>
                            </Link>
                            <Link href="https://discord.com/channels/@me/1245806695620542587" className='flex items-center gap-2'>
                                <IconBrandDiscord color="gray" />
                                <h3 className=' hidden lg:flex font-bold'>Discord</h3>
                            </Link>
                        </div>

                    </div>
                    <br />
                    <div className=' '>
                        <TabsTrigger value="read" onClick={() => setShowSingle(false)} className='hover:text-white'><IconFile className='lg:hidden sm:flex md:flex hover:text-black' /> <span className='hidden lg:flex justify-center bg-black p-2 w-36 rounded-full mt-40 text-center mr-10 '>Read Resume</span></TabsTrigger>
                    </div>
                </TabsList>

                {showSingle ? (
                    // Block 1
                    <div className='flex-1 w-[500px]  lg:ml-96 mt-2'>
                        <HomeContent />
                    </div>

                ) : (
                    <>
                        <div className='w-[700px] lg:ml-96'>
                            <TabsContent value="home"><HomeContent /></TabsContent>
                            <TabsContent value="about"><AboutContent /></TabsContent>
                            <TabsContent value="projects"><LatestWorkContent /></TabsContent>
                            <TabsContent value="contact"><ContactContent /></TabsContent>
                            <TabsContent value="articles"><Articles /></TabsContent>
                            <TabsContent value="biography" className='hidden lg:flex'><Biography /></TabsContent>
                            <TabsContent value="read"><WorkHistory /></TabsContent>
                        </div>
                    </>
                )}


            </Tabs>

        </div>
    )
}

export default Landing
