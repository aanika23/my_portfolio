import React, { Component } from 'react';
import Image_body from './image_body';
import Navbar from './navbar';
import './css/home.css';

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
           <div id="container">
                <Navbar />
           </div>
        );
    }
}
 