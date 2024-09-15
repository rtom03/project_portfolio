import Image from 'next/image'
import React from 'react'


interface props {
    header: string,
    paragraph: string,
    paragraph2?: string
    span?: string;
    icon: string,
    image: string,
    highligth?: string
}
const ArticleShared = ({ header, paragraph, icon, image, span, paragraph2, highligth }: props) => {


    return (

        <div className='flex flex-row gap-4 '>
            <Image
                src={image}
                alt='/'  
                width={200}
                height={200}
                className='rounded-md'
            />
            <div className=' flex flex-col gap-4  lg:w-[600px] md:w-[300px] justify-between '>
                <h2 className='text-xl font-bold  '>{header} <span className='text-xl font-bold text-green-600 '>{span}</span></h2>
                <p className='  text-gray-400'>{paragraph2}
                </p>
                <span className=' text-gray-400'>{paragraph}                 <h3 className='border-2 rounded-md text-center p-1  w-24 text-xs font-bold text-gray-400'>{icon} </h3>
                </span>

            </div>
        </div>
    )
}

export default ArticleShared
