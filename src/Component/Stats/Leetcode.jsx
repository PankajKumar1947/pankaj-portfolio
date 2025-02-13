import React from 'react'
import { SiLeetcode } from 'react-icons/si'
import ProgressBar from '../Common/ProgressBar'

const Leetcode = ({leetcodeStats}) => {
    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
                <SiLeetcode className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">LeetCode Progress</h3>
            </div>

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <span className="dark:text-gray-400">Total Solved</span>
                    <span className="text-xl font-bold">{leetcodeStats.solved || 0}</span>
                </div>

                <div className="space-y-4">
                    <ProgressBar label="Easy" value={leetcodeStats.easy} max={leetcodeStats.solved} color="bg-green-500" />
                    <ProgressBar label="Medium" value={leetcodeStats.medium} max={leetcodeStats.solved} color="bg-yellow-500" />
                    <ProgressBar label="Hard" value={leetcodeStats.hard} max={leetcodeStats.solved} color="bg-red-500" />
                </div>
            </div>
        </div>
    )
}

export default Leetcode