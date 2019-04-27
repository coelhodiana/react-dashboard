import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">DevMedia</a>
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;