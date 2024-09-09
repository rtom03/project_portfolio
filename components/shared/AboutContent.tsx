import React from 'react'
import Header from './Header'
import Image from 'next/image'

const AboutContent = () => {
    return (
        <div className='ml-32 '>

            <Header data="About Me 💬" />
            <div className='flex flex-row gap-12'>
                <Image
                    src="/image/img1.webp"
                    alt='/'
                    width={150}
                    height={150}
                    className='origin-center rotate-12 rounded-md h-64 w-40'
                />
                <Image
                    src="/image/img2.webp"
                    alt='/'
                    width={150}
                    height={150}
                    className='origin-center rounded-md h-64 w-40'
                />
                <Image
                    src="/image/img3.webp"
                    alt='/'
                    width={150}
                    height={150}
                    className='origin-bottom rotate-12 rounded-md h-64 w-40'
                />
                <Image
                    src="/image/img4.webp"
                    alt='/'
                    width={150}
                    height={150}
                    className=' rounded-md ml-5 h-64 w-40'
                />
            </div><br />
            <div className='w-[800px]'>
                <article className='text-gray-500'>
                    <p>
                        Hey there, I'm Tom - a passionate developer, avid writer, and a connoisseur of awesome design. Welcome to my corner of the digital world!

                    </p><br />

                    <p>                    Since the early days of my journey, I've been captivated by the art of crafting exceptional digital experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My goal is to not just create software, but to build digital marvels that seamlessly merge form and function.
                    </p><br />
                    <p>
                        But my journey doesn't stop at coding. With a heart full of words and a mind brimming with ideas, I've ventured into the realm of writing. From tech articles that unravel complex concepts to creative tales that ignite the imagination, I weave words to inform, entertain, and inspire.

                    </p><br />
                    <p>
                        What sets me apart is my unwavering appreciation for design. I believe that aesthetics and usability go hand in hand. My eye for awesome design ensures that every project I undertake not only works flawlessly under the hood but also looks stunning on the surface.

                    </p><br />
                    <p>
                        Through this website, I aim to share my insights, experiences, and creations with you. Whether you're a fellow developer seeking solutions, a fellow writer in search of inspiration, or simply someone who appreciates the finer aspects of design, there's something here for you.

                    </p><br />
                    <p>
                        Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty of thoughtful design.

                    </p><br />
                    Thank you for being here , and I can't wait to embark on this adventure with you.
                </article>
                <br />
            </div>
        </div>
    )
}

export default AboutContent
