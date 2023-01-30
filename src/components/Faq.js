import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function About() {

    const navigate = useNavigate();

    function goToProjects() {
        navigate('/projects')
    }

    function openGithub() {
        window.open('https://github.com/lonelylampost')
    }

    function openLinkedin() {
        window.open('https://ca.linkedin.com/in/kim-sine/')
    }

    function goToHomepage() {
        navigate('/homepage')
    }

    function goToFAQ() {
        navigate('/about')
    }

    return <>
            <div id="main">
            <div id="overhead">
                <div className="faq-about">About me</div>
                <div id="projects" onClick={goToHomepage}>Homepage</div>
                <div className="github" onClick={openGithub}>Github</div>
                <div className="linkedin" onClick={openLinkedin}>LinkedIn</div>
            </div>
            <div id="content">
                <div id="profile-img" onClick={openLinkedin}>KS</div>
                <div className="onepara"> Graduated from George Brown College in 2022 with a certificate in Art and Design, currently living in Toronto, Canada. Front-end web developer, using React and Javascript.</div>
            </div>
        </div>
        <footer id='faq-footer'>
            <button id ="morebtn" onClick={goToProjects}>PROJECTS</button>
            <div id="lowerbtnfaq">
                <button className="lowestbtn" id="about" onClick={goToFAQ}>About me</button>
                <button className="lowestbtn" id="github" onClick={openGithub}>Github</button>
                <button className="lowestbtn" id="linkedin" onClick={openLinkedin}>LinkedIn</button>
            </div>
        </footer>
    </>
}

function Faq() {
    return <> 
    <About />
    </>
}

export default Faq