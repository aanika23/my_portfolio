import React, {Component} from 'react';
import './css/navbar.css';

export default class Navbar extends Component {
    state = { 
        active: 'nav__menu',
     } 

    navToggle = () => {
        let newActive = 'nav__menu';
        if (this.state.active === 'nav__menu'){
            newActive+= ' nav__active';
        }
        this.setState({active: newActive});
    }
    render() { 
        return (
            <nav className='nav'>
                <a href='#' className='nav__logo'>Anika</a>
                <ul className={this.state.active}>
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li><a href="#" className="nav__link">About Me</a></li>
                    <li><a href="#" className="nav__link">Resume</a></li>
                    <li><a href="#" className="nav__link">Skills</a></li>
                    <li><a href="#" className="nav__link">Projects</a></li>
                    <li><a href="#" className="nav__link">Contacts</a></li>
                </ul>
                <div onClick = {() => this.navToggle()} className="nav__toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        );
    }
}
 
