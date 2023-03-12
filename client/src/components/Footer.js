import React from 'react'

function Footer() {

    function openGithub() {
        window.open('https://github.com/lonelylampost')
    }
    
    function openLinkedin() {
        window.open('https://ca.linkedin.com/in/kim-sine/')
    }

    return  <footer id='project-footer'>
                <button className="lowestbtn github" onClick={openGithub}>Github</button>
                <button className="lowestbtn linkedin" onClick={openLinkedin}>LinkedIn</button>
            </footer>
}

export default Footer