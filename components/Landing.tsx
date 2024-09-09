'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    IconAlien,
    IconArrowLeft,
    IconArticle,
    IconBolt,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTabler,
    IconBrandTwitter,
    IconContrastFilled,
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
import ExpertiseContent from './shared/ExpertiseContent';
import ContactContent from './shared/ContactContent';
import Articles from './shared/Articles';
import LatestWorkContent from './shared/LatestWorkContent';
import WorkHistory from './shared/WorkHistory';
import { div } from 'framer-motion/client';

const Landing = () => {
    const [showSingle, setShowSingle] = useState(true);

    return (
        <div>
            <Tabs defaultValue="account" className="flex flex-row w-screen ">

                <TabsList className='flex flex-col w-[200px] bg-gray-100 border-r-2 h-screen p-10 gap-6  text-sm font-medium fixed'>
                    <div className='flex flex-row items-center gap-2'>
                        <Image
                            src='/image/rtom.jpeg'
                            alt='/'
                            width={100}
                            height={100}
                            className="h-7 w-7 flex-shrink-0 rounded-full"
                        />
                        <div className='flex flex-col '>
                            <h3>rtom</h3>
                            <h3 className=' text-xs'> Developer</h3>

                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconBolt className='hover:text-blue-400' />
                        <TabsTrigger value="home" onClick={() => setShowSingle(true)}>Home</TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconUserBolt className='hover:text-blue-400' />
                        <TabsTrigger value="about" onClick={() => setShowSingle(false)}>About</TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconContrastFilled className='hover:text-blue-400' />
                        <TabsTrigger value="projects" onClick={() => setShowSingle(false)}>Projects</TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconMessage className='hover:text-blue-400' />
                        <TabsTrigger value="contact" onClick={() => setShowSingle(false)}>Contact</TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconArticle className='hover:text-blue-400' />
                        <TabsTrigger value="articles" onClick={() => setShowSingle(false)}>Articles</TabsTrigger>
                    </div>
                    <div className='flex flex-row items-center gap-1 hover:bg-slate-50 rounded-md p-1 hover:text-blue-400'>
                        <IconBrandTabler className='hover:text-blue-400' />
                        <TabsTrigger value="expertise" onClick={() => setShowSingle(false)}>Expertise</TabsTrigger>
                    </div>
                    <br /> <br /> <br />
                    <div className=' bg- mt-96'>
                        <TabsTrigger value="read" onClick={() => setShowSingle(false)}>Read Resume</TabsTrigger>
                    </div>
                </TabsList>

                {showSingle ? (
                    // Block 1
                    <div className='ml-96 mt-2'>
                        <HomeContent />
                    </div>

                ) : (
                    // Block 2
                    <>
                        <TabsContent value="home" className='flex justify-center ml-96'><HomeContent /></TabsContent>
                        <TabsContent value="about"><AboutContent /></TabsContent>
                        <TabsContent value="projects"><LatestWorkContent /></TabsContent>
                        <TabsContent value="contact"><ContactContent /></TabsContent>
                        <TabsContent value="articles"><Articles /></TabsContent>
                        <TabsContent value="expertise"><ExpertiseContent /></TabsContent>
                        <TabsContent value="read"><WorkHistory /></TabsContent>
                    </>
                )}


            </Tabs>

        </div>
    )
}

export default Landing
