import React from 'react'

const ProgressBar = ({ label, value, max, color}) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="dark:text-gray-400">{label}</span>
                <span className="font-medium">{value}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-500`}
                    style={{ width: `${(value / max) * 100}%` }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressBar