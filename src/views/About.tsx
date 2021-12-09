import React from 'react'

// styles 

import './About.scss'

interface Props {
    
}

// component 

const About = (props: Props) => {
    return (
        <div className = "about"> 

            <h1> About me </h1>

            <h2>I am Jakub </h2>
            
            <p> I'm a Junior Developer located in Czech republic. I have a good knowledge of HTML, CSS & Sass.
                I have basic knowledge of C#, JavaScript, TypeScript and React in which I am constantly improving.
                So far, I am gaining experience on private projects. I have advanced knowledge with Git, Bash and GitHub.
                I am also interested in graphics and UX design. If I'm not sitting behind my desk, you'll find me at the gym.
            </p>
            <p>
                On a personal level, I am highly-motivated, result oriented, self-driven,
                hard-working, fast learner and constantly seeking to improve
                my skills and am fully aware of the latest Front-end Development Tools.
                I am ready to develop my skills it in my new profession.
            </p>
            <p>
                I completed the course ReactGirls - basics of HTML, CSS, JavaScript and React and is able to use this knowledge for creating a web application.
                I also took courses from Learn2Code - HTML, CSS & JavaScript, JavaScript & ES6, Vue, Sass, React, Git, C#, OOP, Node.js, Bash and other..
            </p>
        </div>
    )
}

export default About