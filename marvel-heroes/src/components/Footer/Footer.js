import React from "react";
import {Navbar} from "react-bootstrap"
import './Footer.css';

const Footer = () => {
    return (
        <Navbar className={"footer justify-content-center"}>
            <Navbar.Brand>
                <span className={"name"}>&copy; 2021, by Sasa Andjelkovic, Nikola Colovic, Dimitrije Pavkovic and Vladan Cupric</span>
            </Navbar.Brand>

        </Navbar>
      );
}
 
export default Footer;