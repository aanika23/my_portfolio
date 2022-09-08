import React, { Component } from 'react';
import profilePic from './image/profile_pic_no_bg.png'
import {motion} from 'framer-motion'

class Image_body extends Component {
    state = { 
     } 
    render() { 
        return (
            <div>
                <motion.div animate={{x: 600}} transition={{duration:2}} id="intro_text_box">
                    <p class="intro_text m-2">HI THERE. I'M</p>
                    <h1 id="intro_text_header" class="intro_text">Hire Me Please</h1>
                    <p class="intro_text">Recent Software/Computer Engineer Grad</p>
                </motion.div>
                <motion.img animate={{x: -600}} transition={{duration:2}} src={profilePic} id="image_mov"></motion.img>
            </div>
        );
    }
}
 
export default Image_body;