import insta from '../Assests/projects/insta.png'
import careerCraft from '../Assests/projects/carrerCraft.png'
import portfolio from '../Assests/projects/portfolio.png'
import snapStudy from '../Assests/projects/snap-study.png'
import tailwind from '../Assests/logo/tailwind.png'
import html from '../Assests/logo/html.png'
import css from '../Assests/logo/css.png'
import js from '../Assests/logo/js.png'
import react from '../Assests/logo/react.png'
import nodejs from '../Assests/logo/nodejs.png'
import monogodb from '../Assests/logo/mongodb.svg'
import expressjs from '../Assests/logo/expressjs.png'

const projectData=[
    {
        title:"FullStack-Instagram",
        desc:"FullStack Instagram Clone using monogodb,react,expressjs,nodejs and tailwind",
        img:insta,
        liveLink:"https://insta-clone-mern.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/FullStack-Instagram-Clone",
        tech:[
            monogodb,
            react,
            expressjs,
            nodejs,
            tailwind,
        ],
    },
    {
        title:"Personal Portfolio",
        desc:"Portfolio website to showcase a collection of projects, skills, and professional experiences.",
        img:portfolio,
        liveLink:"https://pankaj-personal-portfolio.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/pankaj-portfolio",
        tech:[
            react,
            tailwind,
            css,
            html,
        ],
    },
    {
        title:"SnapStudy",
        desc:"academic resources available to engineering students for upcoming semester exams",
        img:snapStudy,
        liveLink:"https://github.com/PankajKumar1947/snap-study",
        repoLink:"https://github.com/PankajKumar1947/snap-study",
        tech:[
            react,
            tailwind,
            css,
            js

        ],
    },
    
    {
        title:"Career-Craft",
        desc:"Carrer-Craft an Educational website for Online course.",
        img:careerCraft,
        liveLink:"https://career-craft-rose.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/Career-Craft",
        tech:[
            html,
            css,
            react,
            tailwind
        ],
    },
]

export default projectData;