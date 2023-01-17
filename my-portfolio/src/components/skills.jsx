import React, { Component } from 'react';


import './css/skills.css';

export default class Skills extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_tab:"1",//Resume
        };
    }

    handleChange = (event, newValue) => {
        this.setState({active_tab: newValue});

    }
}