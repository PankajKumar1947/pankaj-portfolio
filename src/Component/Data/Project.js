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

const techData = {
    react:{
        name:"React",
        logo:react,
    },
    tailwind:{
        name:"Tailwind",
        logo:tailwind,
    },
    nodejs:{
        name:"Nodejs",
        logo:nodejs,
    },
    monogodb:{
        name:"Monogodb",
        logo:monogodb,
    },
    expressjs:{
        name:"Expressjs",
        logo:expressjs,
    },
    mysql:{
        name:"MySql",
        logo:mysql,
    },
    typescript:{
        name:"Typescript",
        logo:typescript,
    },
    hono:{
        name:"Hono",
        logo:hono,
    },
    html:{
        name:"HTML",
        logo:html,
    },
    css:{
        name:"CSS",
        logo:css,
    },
    js:{
        name:"Javascript",
        logo:js,
    },
}

const projectData=[
    {
        title:"FullStack-Instagram",
        desc:[
            "Frontend: React.js with user authentication, post creation, likes, comments ,bookmarks.",
            "Backend: Node.js/Express.js, MongoDB for data storage.",
            "Additional features: JWT authentication, profile updation, follow, unfollow, image uploading, etc.",
            "Deployment: Frontend and backend both are deployed on vercel."
        ],
        img:insta,
        liveLink:"https://insta-clone-mern.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/FullStack-Instagram-Clone",
        tech:[
            techData.mysql,
            techData.react,
            techData.tailwind,
            techData.nodejs,
            techData.expressjs,
            techData.monogodb
        ],
    },
    {
        title:"MyCodingNotes",
        desc:[
            "Developed a web platform, MyCodingNotes, enabling users to create, share, and store notes using markdown with multi-page support.",
            "Integrated user authentication for secure access and note-sharing, while providing privacy controls for managing content.",
            "The platform also provides a user-friendly, responsive interface for seamless navigation and note management across devices."
        ],
        img:mycodingnotes,
        liveLink:"https://mycodingnotes.vercel.app/",
        repoLink:"https://github.com/PankajKumar1947/mycodingnotes-project",
        tech:[
            techData.mysql,
            techData.react,
            techData.tailwind,
            techData.nodejs,
            techData.expressjs,
            techData.monogodb
        ],
    },
    {
        title:"SnapStudy",
        desc:[
            "SnapStudy, a platform designed to enhance the academic resources available to engineering students for upcoming semester exams.",
            "Frontend: React js with react-router-dom, Tailwind for styling, Integrated JSON Data for dynamic content rendering.",
            "Data: Utilized GitHub hosting for JSON data, enabling easy updates and maintenance .",
            "Pdfs are stored in Drive and links generated are kept in json format and hosted on Github pages"
        ],
        img:snapStudy,
        liveLink:"https://github.com/PankajKumar1947/snap-study",
        repoLink:"https://github.com/PankajKumar1947/snap-study",
        tech:[
            techData.react,
            techData.tailwind,
            techData.css,
            techData.js
        ],
    },
]

export default projectData;