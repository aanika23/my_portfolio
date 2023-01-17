import React, { Component } from 'react';
import './css/about_me.css';
import profile_pic from './image/profile_pic.jpg';

export default function AboutMe()  {
    // state = {  } 
    // render() { 

        return (
        <div>
            <div id="id_card">
                <img id="image_holder" src={profile_pic}></img>
                <div id="about_outside_div">
                    <div id="about_me_container">
                        <div id="about_me_text_container">
                            <p id="header_main" class='about_text'>Header Main</p>
                            <p id="header_sub" class='about_text'>Header Main</p>
                            <p id="main_body" class='about_text'>Main Body blah blah blah blah</p>
                        </div>

                    </div>
                </div>
            </div>
             <div id='about-footer-space'></div>
        </div>
        );
    // }
}