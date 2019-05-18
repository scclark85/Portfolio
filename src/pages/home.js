import React, { Component } from 'react';
import { Animated } from "react-animated-css";
// import { Link } from "react-router-dom";
import "./style.css"

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="home-nav" id="main-nav">
                    <div className="container">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" id="main-link" href="/about"><b>ABOUT</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="main-link" href="/work"><b>PORTFOLIO</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="main-link" href="/resume"><b>RESUME</b></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="App-header">
                    <Animated animationIn="bounceInLeft">
                        <h1 id="name"><b>Sarah Clark</b></h1>
                    </Animated>

                    <Animated animationIn="bounceInRight">
                        <h6 className="bounceInRight" id="headline"><i>Interior Designer Turned Web Developer</i></h6>
                    </Animated>
                </div>
            </div>

        )
    }
}
export default Home