import React from 'react'
import Header from './Header'
import Image from 'next/image'
import ArticleShared from './ArticleShared'

const Articles = () => {
    return (
        <div className='ml-32 gap-10 '>

            <Header data='My Articles 📝' subHeader="Ever since I was a kid, I've been fascinated by technology." />
            <div className='flex flex-col gap-7'>
                <ArticleShared header='Currently Reading The Promise Land By'
                    paragraph2='Barack Obama is one of the greatest minds of our Lifetime'
                    paragraph='Reading his book as been soo much and a way for me to create a space within myself and visualize the likeness of me in what my value are'
                    icon='Great Book 📖 '
                    image='/image/prm.webp' span='Barack Obama' />
                <ArticleShared
                    header='How to solve it by'
                    span='George Polya'
                    paragraph='This book teaches a four-step approach to problem-solving: understand the problem, devise a plan, execute the plan, and review the results. It emphasizes logical thinking and strategies applicable beyond mathematics..'
                    image='/image/how.png'
                    icon='Great Book 📖'
                />
                <ArticleShared
                    header='Tailwindcss tips and tricks to conquer the'
                    span='World'
                    image='/image/image2.webp'
                    paragraph='Master Tailwind CSS with these expert tips and tricks to build stunning, responsive designs effortlessly. Conquer the world of frontend development with clean, maintainable code.'
                    icon='Great Book 📖'
                />
                <ArticleShared
                    header='Writing Clean Code With'
                    span='React && Typescript'
                    image='/image/image5.webp'
                    paragraph='Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.'
                    icon='Great Book 📖'
                />
            </div>
        </div>
    )
}

export default Articles
