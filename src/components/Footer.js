import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate();

    function goToFAQ() {
        navigate('/about')
    }

    function openGithub() {
        window.open('https://github.com/lonelylampost')
    }
    
    function openLinkedin() {
        window.open('https://ca.linkedin.com/in/kim-sine/')
    }

    return  <footer id='project-footer'>
                <button className="lowestbtn about" onClick={goToFAQ}>About me</button>
                <button className="lowestbtn github" onClick={openGithub}>Github</button>
                <button className="lowestbtn linkedin" onClick={openLinkedin}>LinkedIn</button>
            </footer>
}

export default Footer