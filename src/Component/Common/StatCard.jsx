import React from 'react'

const StatCard = ({ title, value }) => {
    return (
        <div className="dark:bg-gray-900 bg-gray-200 p-4 rounded-lg text-center">
            <p className="text-lg sm:text-xl font-bold mb-1">{value}</p>
            <p className="text-sm dark:text-gray-400">{title}</p>
        </div>
    )
}

export default StatCard