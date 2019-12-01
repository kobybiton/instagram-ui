import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import './Header.scss';

class Header extends Component {
    render () {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <Link className="nav-link" to="/">
                        <img className="instagram-icon" src="/instagram-icon.png" alt="Instagram Icon"/>
                        <img className="instagram-logo" src="/instagram-logo.png" alt="Instagram Logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/post/create">Create Post</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;
