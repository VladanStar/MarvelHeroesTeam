import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/marvel1.png";

const Header = () => {
    return ( 

        <Navbar className ={"width"}>
            <h1 className={"text"}>
        <img src= {logo} alt="logo"/>
            </h1>
        </Navbar>
     );
}
 
export default Header;