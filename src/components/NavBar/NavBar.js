import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
    render = () => {
        let activePage = this.props.activePage ? this.props.activePage : "";
        console.log(activePage);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark main-nav py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        PROpHET
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                    >
                        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li
                                className={
                                    "nav-item " +
                                    (activePage == "home" ? "active" : "")
                                }
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={
                                    "nav-item " +
                                    (activePage == "about" ? "active" : "")
                                }
                            >
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>    
                            <li
                                className={
                                    "nav-item " +
                                    (activePage == "disclaimer" ? "active" : "")
                                }
                            >
                                <Link className="nav-link" to="/disclaimer">
                                    Disclaimer
                                </Link>
                            </li>        
                            <li
                                className={
                                    "nav-item " +
                                    (activePage == "publications" ? "active" : "")
                                }
                            >
                                <Link className="nav-link" to="/publications">
                                    Publications
                                </Link>
                            </li>    
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default NavBar;
