import React from 'react'
import StatCard from '../Common/StatCard'
import { FaGithub } from 'react-icons/fa'

const Github = ({githubStats}) => {
    return (
        <div className="dark:bg-gray-800 bg-white p-6 rounded-xl dark:text-white text-black">
            <div className="flex items-center gap-2 mb-6">
                <FaGithub className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">GitHub Activity</h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <StatCard title="Repositories" value={githubStats.public_repos || '0'} />
                <StatCard title="Followers" value={githubStats.followers || '0'} />
                <StatCard title="Following" value={githubStats.following || '0'} />
            </div>

            {/* GitHub Streak Graph */}
            <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=pankajkumar1947&theme=dark`}
                alt="GitHub Streak"
                className="mt-6 rounded-lg h-40 w-full"
            />
        </div>
    )
}

export default Github