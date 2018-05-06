import React from 'react';
import './navbar.css';
import {NavLink } from "react-router-dom";

const NavBar = ()=>(
    <nav>
        <NavLink to="/new" className="nav-item">Add new record</NavLink>
        <NavLink to="/search" className="nav-item">Search record</NavLink>
        <NavLink to="/edit" className="nav-item">Edit record</NavLink> 
    </nav>
)

export default NavBar