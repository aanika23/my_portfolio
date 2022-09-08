import React, { Component } from 'react';
import profilePic from './image/profile_pic_no_bg.png'

class Image_body extends Component {
    state = { 
        imageBodyUrl: './image/profile_pic_no_bg.png'
     } 
    render() { 
        return (
            <div>
                <img src={profilePic} id="image_mov"></img>
            </div>
        );
    }
}
 
export default Image_body;