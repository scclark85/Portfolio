import React, { Component } from 'react';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Pdf from "../SarahClark_Resume.pdf";
import { Animated } from "react-animated-css";
import "./style.css"

class Resume extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Nav />
                </div>

                <header className="jumbotron"
                    style={{
                        backgroundColor: "#330033",
                        color: "white"
                    }}>

                    <Animated className="fadeIn"><div id="resume-title">
                        <b>RESUME</b>
                        <p style={{
                            fontSize: "20px",
                        }}>
                            <a className="pdf" href={Pdf} target="_blank"
                                rel="noopener noreferrer"
                            >Click here for PDF Version</a>
                        </p>
                    </div></Animated>
                </header>
                <br />

                <div className="container">

                    <div className="screen-resume">
                        <img
                            src="/images/Sarah_Clark_Resume.png"
                            className="resume"
                            alt="resume"
                        />
                    </div>
                    <br />

                    <div className="">
                        <Modal />
                    </div>
                </div>
                <br />

                <Footer />
            </div>
        )
    }
}
export default Resume