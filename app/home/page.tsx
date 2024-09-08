import Dashboard from '@/components/shared/DashboardContent'
import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col absolute ml-96 mt-20 h-screen'>
            <h1>Dashboard</h1>
            <div>
                <Dashboard />
            </div>
        </div>
    )
}

export default Home
