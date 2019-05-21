import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import "./style.css"

class Main extends Component {
    render() {
        return (
            <div>
                {/* Nav */}
                <nav className="navbar navbar-expand-lg fixed-top" id="main-nav">
                    <div className="container">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" id="main-link" href="/"><b>PORTFOLIO</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="main-link" href="/about"><b>ABOUT</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="main-link" href="/resume"><b>RESUME</b></a>
                                </li>
                            </ul>
                        </div>
                </nav>

                {/* Full Page Image Header with Vertically Centered Content */}
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <Animated animationIn="bounceInLeft"><h1 className="title"><b>Sarah Clark</b></h1></Animated>

                                <Animated animationIn="bounceInRight"> <p className="lead"><i>Full Stack Web Development Portfolio</i></p></Animated>

                                <div>
                                    <Animated className="animated infinite bounce delay-2s">
                                        <a href="#work" class="w3-button w3-light-grey"><i class="fas fa-2x fa-chevron-down"
                                            style={{
                                                color: "white"
                                            }}></i></a>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div >
        )
    }
}

export default Main