import React from 'react'


interface props {
    data: string
    subHeader?: string
    sub?: string
}
const Header = ({ data, subHeader, sub }: props) => {
    return (
        <div className='flex flex-col   mt-14 gap-4'>
            <h1 className='text-3xl font-extrabold'>{data}</h1>
            <h3 className='text-1xl text-gray-400 w-[600px]'>{subHeader}</h3>
            <h3 className='text-1xl w-[600px] text-gray-400'>{sub}</h3>
        </div>
    )
}

export default Header
