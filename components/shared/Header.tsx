import React from 'react'


interface props {
    data: string
    subHeader?: string
    sub?: string
}
const Header = ({ data, subHeader, sub }: props) => {
    return (
        <div className='flex flex-col   mt-14 gap-2'>
            <h1 className='text-3xl font-extrabold'>{data}</h1>
            <h3 className='text-1xl w-[600px]'>{subHeader}</h3>
            <h3 className='text-1xl w-[600px]'>{sub}</h3>
            <br />
        </div>
    )
}

export default Header
