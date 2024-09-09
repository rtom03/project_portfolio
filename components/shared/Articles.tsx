import React from 'react'
import Header from './Header'
import Image from 'next/image'

const Articles = () => {
    return (
        <div className='ml-32 gap-10 '>

            <Header data='My Articles 📝' subHeader="Ever since I was a kid, I've been fascinated by technology." />
            <div className='flex flex-col gap-10'>
                <div className='flex flex-row gap-4'>
                    <Image
                        src="/image/image1.webp"
                        alt='/'
                        width={200}
                        height={200}
                        className='rounded-md'
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>Writing Clean Code With React</h2>
                        <p className='w-[550px]  text-gray-400'>Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.
                        </p>
                        <h3 className='border-2 rounded-md text-center p-1  w-24 text-xs font-bold text-gray-400'>Clean Code</h3>

                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <Image
                        src="/image/image2.webp"
                        alt='/'
                        width={200}
                        height={200}
                        className='rounded-md'
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>How to solve it</h2>
                        <p className='w-[550px]  text-gray-400'>Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.
                        </p>
                        <h3 className='border-2 rounded-md text-center p-1  w-24 text-xs font-bold text-gray-400'>Clean Code</h3>

                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <Image
                        src="/image/image3.webp"
                        alt='/'
                        width={200}
                        height={200}
                        className='rounded-md'
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>thumbnail
                            Tailwindcss tips and tricks to conquer the world</h2>
                        <p className='w-[550px]  text-gray-400'>Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.
                        </p>
                        <h3 className='border-2 rounded-md text-center p-1  w-24 text-xs font-bold text-gray-400'>Clean Code</h3>

                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <Image
                        src="/image/image5.webp"
                        alt='/'
                        width={200}
                        height={200}
                        className='rounded-md'
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-bold'>Writing Clean Code With React</h2>
                        <p className='w-[550px]  text-gray-400'>Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.
                        </p>
                        <h3 className='border-2 rounded-md text-center p-1  w-24 text-xs font-bold text-gray-400'>Clean Code</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
