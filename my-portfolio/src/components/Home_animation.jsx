import React, { Component, useEffect } from 'react';
import home_logo from "./image/main_page_logo.png"
import {motion, useAnimation} from 'framer-motion'
import welcome_gif from "./image/giphy.gif"

export default function Home_animation()  {
    const state = {  } 
    const styles={
        background: 'black',
        height: '100vh',
    }
    
    return (
        <div id="home_container">
                <div id="welcome_gif_container">
                    <img id="welcome_gif" src={welcome_gif}/>
                </div>
                <div id="trait_container">
                    <p class="header_traits">Hi, I am Anika Sheikh!</p>
                    <p class="traits">Funny</p>
                    <p class="traits">Funnier Than Riku</p>
                    <p class="traits">Better than riku</p>
                    <p class="traits">Funny</p>
                </div>

        </div>
    );
    
}
 