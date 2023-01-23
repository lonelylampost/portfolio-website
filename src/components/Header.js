import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

function OverHead() {

    function openGithub() {
        window.open('https://github.com/lonelylampost')
    }

    const navigate = useNavigate();

    function goToFAQ() {
        navigate('/about')
    }

    function openLinkedin() {
        window.open('https://ca.linkedin.com/in/kim-sine/')
    }

    return  <div id="overhead">
                <div id="project">Projects</div>
                <div className="about" onClick={goToFAQ}>About me</div>
                <div className="github" onClick={openGithub}>Github</div>
                <div className="linkedin" onClick={openLinkedin}>LinkedIn</div>
            </div>
}

export default OverHead