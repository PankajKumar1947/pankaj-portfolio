import insta from '../Assests/projects/insta.png'
import snapStudy from '../Assests/projects/snap-study.png'
import mycodingnotes from '../Assests/projects/mycodingnotes.png'
import tailwind from '../Assests/logo/tailwind.png'
import html from '../Assests/logo/html.png'
import css from '../Assests/logo/css.png'
import js from '../Assests/logo/js.png'
import react from '../Assests/logo/react.png'
import nodejs from '../Assests/logo/nodejs.png'
import monogodb from '../Assests/logo/mongodb.svg'
import expressjs from '../Assests/logo/Expressjs.png'
import mysql from '../Assests/logo/mysql.jpg'
import typescript from '../Assests/logo/typescript.png'
import hono from '../Assests/logo/hono.png'

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
        title:"MyCodingNotes",
        desc:"A plateform to create, read, share with anyone. An educator can creates notes and can share with the students",
        img:mycodingnotes,
        liveLink:"https://mycodingnotes.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/mycodingnotes-project",
        tech:[
            mysql,
            react,
            typescript,
            hono,
            nodejs,
            tailwind,
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
]

export default projectData;