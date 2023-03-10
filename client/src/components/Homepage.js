import "./styles.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Homepage() {
    return <>
    <MakeHomepage />
    </>
}

function MakeHomepage() {

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

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          }
        }
    }
      
      window.addEventListener("scroll", reveal);

    return <>
        <div className="main">
            <div id="overhead" className="sticky">
                <div id="overhead-title">Homepage</div>
                <div id="projects" onClick={goToProjects}>Projects</div>
                <div id="linkedin" onClick={openLinkedin}>LinkedIn</div>
            </div>
            <div className="one">
                <div id="onelower">
                    <div className="cont">
                        <div className="onetitle">Welcome!</div>
                        <div className="onepara">My name is Kimberly Sine. I'm a front-end web developer that the MERN Stack. Scroll down to see some of my projects!</div>
                    </div>
                    <div id="contone" className="cont">
                        <img id="oneborder" className="alone" src="./img/mygithub.png" alt="Github page" onClick={openGithub}/>
                        <button id="topbtn" onClick={openGithub}>Check it out!</button>
                    </div>
                </div>
            </div>
            <div id ="two" className="section reveal fade-left" >
                <div id="examples" className="border ">
                    <div id="hoverel">JavaScript</div>
                        <img id="oneborder" src="./img/recipegen.png" alt="Recipe Generator" onClick={() => {window.open('https://github.com/lonelylampost/recipe-generator')}}/>
                    <button id="topbtn" onClick={() => {window.open('https://github.com/lonelylampost/recipe-generator')}}>Check it out!</button>
                </div>
                <div className="leftyone">
                    <div className="leftyonetitle">Recipe Generator</div>
                    <div className="leftyonedes">HTML - CSS - JS - WEBPACK - REST API</div>
                    <ul className="leftyonelist">
                        <li>Allows the user to input a combination of ingredients to generate a recipe</li>
                        <li>The user can add their own ingredients and recipes, which are saved across sessions</li>
                        <li>Responsive design</li>
                        <li>Uses Wikimedia API to aquire an image and short description of the recipe</li>
                        <li>Uses Google's Search API to get the top results for the recipe created</li>
                    </ul>
                </div>
            </div>
            <div id ="three" className="section reveal fade-right">
            <div className="leftyone">
                    <div className="leftyonetitle">Simulator Game</div>
                    <div className="leftyonedes">HTML - CSS - JS</div>
                    <ul className="leftyonelist">
                        <li>User can create maze and direct lemmings through to the exit</li>
                        <li>Has upgrade store to increase points counter</li>
                        <li>User input is automatically saved across sessions</li>
                        <li>Quicksave feature that saves layout of maze</li>
                        <li>Scoreboard to save highscores across sessions</li>
                    </ul>
                </div>
                <div id="examples" className="border">
                    <div id="hoverelalt">JavaScript</div>
                        <img id="oneborder" src="./img/simgame.png" alt="Simulator Game" onClick={() => {window.open('https://lonelylampost.github.io/simulator-game/')}} />
                    <button id="topbtn" onClick={() => {window.open('https://github.com/lonelylampost/simulator-game')}}>Check it out!</button>
                </div>

            </div>
            <div id ="four" className="section reveal fade-left">
                <div id="examples" className="border">
                    <div id="hoverel">React</div>
                        <img id="oneborder" src="./img/storepage.png" alt="Sample website" onClick={() => {window.open('https://lonelylampost.github.io/sample-shopping-website/')}} />
                    <button id="topbtn" onClick={() => {window.open('https://github.com/lonelylampost/Sample-shopping-website')}}>Check it out!</button>
                </div>
                <div className="leftyone">
                    <div className="leftyonetitle">Storefront</div>
                    <div className="leftyonedes">HTML - CSS - JS - REACT.JS - NODE.JS - EXPRESS.JS - MONGODB - MONGOOSE</div>
                    <ul className="leftyonelist">
                        <li>Converted from Javascript to React</li>
                        <li>User can filter products using dynamically added parameters, and add items to their cart</li>
                        <li>Automatically generated filtering tags</li>
                        <li>Can sort products by price</li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>
            <button id ="morebtn" onClick={goToProjects}>MORE PROJECTS</button>
        </footer>
    </>
}

export default Homepage