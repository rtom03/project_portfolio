import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'



interface Sharedrops {
    data?: string,
    image: string,
    header?: string,
    sub?: string,
    span: string,
    link: string,
}
const Shared = ({ data, image, header, sub, span, link }: Sharedrops) => {
    return (
        <div>
            <div className='flex flex-col mt-14'>

                <div className='flex flex-row hover:bg-gray-100 p-4 rounded-md w-[750px] gap-5 lg:w-[750px] md:w-[600px]'>
                    <Image
                        src={image}
                        alt='/'
                        width={150}
                        height={150}
                        className='rounded-md'
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold'>{header}</h2><br />
                        <span className='text-xs text-gray-500'>{span}</span>
                     
                        <div className='flex flex-row items-center w-[520px] justify-between mt-8 lg:w-[520px] md:w-[400px]'>
                            <h3 className='text-xs font-bold text-gray-500'>NextJs,Typescript,Tailwindcss</h3>
                            <Link href={link}>
                                <h3 className='bg-black rounded-md p-2 text-white w-24 text-xs font-bold'>View Project</h3>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Shared
