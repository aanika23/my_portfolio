import React, { Component, useEffect } from 'react';
import home_logo from "./image/main_page_logo.png"
import {motion, useAnimation} from 'framer-motion'

export default function Home_animation()  {
    const state = {  } 
    const styles={
        background: 'black',
        height: '100vh',
    }
    const animation = useAnimation();

    async function sequence() {
        await animation.start({
            height:"50vh",
            y:200,
            opacity: 1,
        });
        await animation.start({
            height:"50vh",
            width:"70vh",
            opacity: 1,
        })
    }

    useEffect(() => {
        sequence();
      }, []);
    
    return (
        <div id="home_container">
            <motion.div id="logo_container" style={styles} animate={animation}
            transition={{
                delay: '0.5',
                duration: '2'
            }}>
                <img src={home_logo} id="home_logo"></img>
            </motion.div>
            <motion.div id="info_container">Hello</motion.div>

        </div>
    );
    
}
 