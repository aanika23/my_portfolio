import React, { Component } from 'react';
import Navbar from './navbar';
import Home_animation from './Home_animation';
import './css/home.css';
import "@fontsource/amatic-sc";

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
           <div id="container">
                <Navbar />
                <Home_animation />
           </div>
        );
    }
}
 