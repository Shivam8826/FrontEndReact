import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import { Button } from '../Button';
import logo from './logo.png';
import  DrawerItems  from "../DrawerItems";
import { Link } from 'react-router-dom';
class Navbar extends Component{
    state = { clicked: false}
handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
}
    render(){
        return(
            <nav className="NavbarItems">
                  <DrawerItems/>
                <h1 className="navabar-logo"><img src={logo} width="120" height="90"></img></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                       return(
                        <li key={index}>
                        <a className={item.cName} 
                        href={item.url}>
                        {item.title}
                        </a>
                        </li>

                       )
                    })}

                </ul>
                <Button><Link to = "/SignUp">
                    
                    Sign Up
                     </Link>
                    </Button>
              
            </nav>
   
            
        )
    }
}
export default Navbar
