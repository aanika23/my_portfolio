import React, { Component } from 'react';
import Navbar from './navbar';
import Home_animation from './Home_animation';
import AboutMe from './about_me';
import Resume from './resume';
import './css/home.css';
import "@fontsource/amatic-sc";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <div id="container">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home_animation/>}/>
                        <Route path="/about_me" element={<AboutMe/>} />
                        <Route path="/resume" element={<Resume/>} />
                    </Routes>
                </div>
            </BrowserRouter>
           
        );
    }
}
 