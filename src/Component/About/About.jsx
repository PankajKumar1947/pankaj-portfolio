import React, { useEffect, useState } from 'react'
import Github from '../Stats/Github'
import LeetCode from '../Stats/Leetcode'

const About = () => {
  const [githubStats, setGithubStats] = useState({});
  const [leetcodeStats, setLeetcodeStats] = useState({
    solved: 680,
    easy: 233,
    medium: 390,
    hard: 57
  });

  useEffect(()=>{
    const fetctGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/PankajKumar1947');
        const data = await response.json();
        console.log(data);
        setGithubStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }

    }

    fetctGithubStats()
  },[])
  return (
    <>
      <div id="about" className="max-w-[1080px] mx-auto dark:text-white flex flex-col lg:flex-row items-center gap-8 mt-20 font-abc">
        <div data-aos="fade-left space-y-4">
          <h2 className="text-3xl font-semibold underline underline-offset-8 text-center">About <span className="text-[#86198f]">Me</span></h2>
          <ul className="mt-4 space-y-3 text-base md:text-lg leading-relaxed dark:text-gray-300">
            {[
              "I’m Pankaj Kumar, a B.Tech student in Computer Science at Asansol Engineering College, passionate about full-stack development.",
              "Skilled in backend technologies like Node.js, Express.js, and MongoDB, and frontend technologies such as React.js, Next.js, JavaScript, HTML, CSS, and Tailwind CSS.",
              "Over 600+ data structures and algorithm problems solved on LeetCode, enhancing my problem-solving skills.",
              "Always eager to learn and stay up-to-date with new technologies in software development.",
              "Excited to contribute to impactful projects at the intersection of technology and creativity.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#d946ef]">•</span>
                <p className='text-sm sm:text-base'>{text}</p>
              </li>
            ))}
          </ul>


          <div className='grid sm:grid-cols-2 gap-4 mt-4'>
            <Github githubStats={githubStats} />
            <LeetCode leetcodeStats={leetcodeStats} />
          </div>
        </div>


      </div>
    </>
  )
}

export default About;
