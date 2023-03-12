import "./styles.css"
import React from 'react'
import OverHead from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from 'react'

function ProjectPage() {
    return <>
    <OverHead />
    <CreateProjects />
    <Footer />
    </>
}

function CreateProjects() {

    const [projectArray, setProjectArray] = useState({})

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:5000/api");
            const data = await response.json();
            setProjectArray(data);
        }
            getData()
    }, [])

    return         <>
    {(typeof projectArray.projects === 'undefined') ? (
        <div>...</div>
    ) : (projectArray.projects.map((project) => {
        return <div className ="container" key={project._id}>
            <div id="left">
                <img src={'./img/' + project.image} alt={project.alt} className="project-img" onClick={() => {window.open(project.github)}}/>
            </div>
            <div id='right'>
                <div className="title">{project.title}</div>
                <div className="types">{project.types.join(" • ")}</div>
                <ul>
                    {project.description.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
        
        
    }))}</>
}

export default ProjectPage
