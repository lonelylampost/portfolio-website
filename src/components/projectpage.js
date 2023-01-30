import "./styles.css"
import React from 'react'
import ReactDOM from 'react-dom'
import OverHead from "./Header"
import Footer from "./Footer"



let projectArray = [
    {
        id: 0,
        title: "Simulator Game",
        types: ["JS", "HTML","CSS"],
        description: [
            "User can create maze and direct lemmings through to the exit",
            "Has upgrade store to increase points counter",
            "User input is automatically saved across sessions",
            "Quicksave feature that saves layout of maze",
            "Scoreboard to save highscores across sessions"
        ],
        image: "simgame.png",
        alt: "A game with DOS graphics",
        link: "https://lonelylampost.github.io/simulator-game/",
        github: "https://github.com/lonelylampost/simulator-game"
    },
    {
        id: 1,
        title: "Recipe Generator",
        types: ["JS", "HTML","CSS","Webpack","Node.js","Rest API"],
        description: [
            "Allows the user to input a combination of ingredients to generate a recipe",
            "The user can add their own ingredients and recipes, which are saved across sessions",
            "Responsive design, can be used on different devices",
            "Uses Wikimedia API to aquire an image and short description of the recipe",
            "Uses Google's Search API to get the top results for the recipe created"
        ],
        image: "recipegen.png",
        alt: "A program to find recipes with three ingredients",
        link: "https://github.com/lonelylampost/recipe-generator",
        github: "https://github.com/lonelylampost/recipe-generator"
    },
    {
        id: 2,
        title: "Portfolio Website",
        types: ["React", "HTML","CSS"],
        description: [
            "The website you are using right now!",
            "The projects webpage is generated from reading a list of objects",
            "Responsive Design, can be viewed on diffent mobile devices"
        ],
        image: "mywebsite.png",
        alt: "The website you're on now!",
        link: "https://github.com/lonelylampost/portfolio-website",
        github: "https://github.com/lonelylampost/portfolio-website"
    },
    {
        id: 3,
        title: "Store Website",
        types: ["Javascript", "HTML","CSS", "React"],
        description: [
            "Converted from Javascript to React",
            "User can add and remove products using useContext hooks",
            "Products are diplayed by reading from a list of items, and filtered out by keywords"
        ],
        image: "storepage.png",
        alt: "A store's website",
        link: " https://lonelylampost.github.io/sample-shopping-website/",
        github: "https://github.com/lonelylampost/Sample-shopping-website"
    }
]


function ProjectPage() {
    return <>
    <OverHead />
    <CreateProjects />
    <Footer />
    </>
}

function CreateProjects() {
    return projectArray.map((project) => {
        return <>
        <div className ="container" key={project.id}>
            <div id="left">
                <img src={'./img/' + project.image} alt={project.alt} className="project-img" onClick={() => {window.open(project.github)}}/>
            </div>
            <div id='right'>
                <div className="title">{project.title}</div>
                <div className="types">{project.types.join(" • ")}</div>
                <ul>
                    {project.description.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        </div>
        </>
    })
}

export default ProjectPage
