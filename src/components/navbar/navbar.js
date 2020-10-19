import React from 'react';
import './navbar.css';            


class Navbar extends React.Component {
    
    render() {
        return(
            <nav id="navbar-container">
                <h2 id="title-navbar">Welcome to TakeNotes !</h2>
                <ul id="note-making">
                    <li>Create Note</li>
                    <li>See all the Notes</li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;
