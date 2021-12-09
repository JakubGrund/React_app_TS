import React from 'react'

// styles 

//import './Home.scss'


// assets 

import logo from '../assets/logo.svg'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className = "home"> 

            <img className="logo" src={logo} alt="" />

            <h1> This is React music app  </h1>

            <p> You can find me on <a href="https://jakub.grund.eu">www.jakubgrund.eu</a></p>

            
            
        </div>
    )
}

export default Home





