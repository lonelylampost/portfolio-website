import React from 'react'

function OverHead() {

    function openGithub() {
        window.open('https://github.com/lonelylampost')
    }

    function openLinkedin() {
        window.open('https://ca.linkedin.com/in/kim-sine/')
    }

    return  <div id="overhead">
                <div id="project">Projects</div>
                <div className="github" onClick={openGithub}>Github</div>
                <div className="linkedin" onClick={openLinkedin}>LinkedIn</div>
            </div>
}

export default OverHead