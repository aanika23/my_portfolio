import React, { Component } from 'react';
import Image_body from './image_body';
import Navbar from './navbar';
import AboutMe from './about_me';
import './css/home.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <div id="container">
                    <Navbar />
                    <Routes>
                        <Route path="/about_me" Component={AboutMe} />
                    </Routes>
                </div>
            </BrowserRouter>
           
        );
    }
}
 