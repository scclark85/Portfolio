import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import "./style.css"

class Work extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Nav />
                </div>

                <header className="jumbotron"
                    style={{
                        color: "white",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: "url(/images/artificial-intelligence-codes-developing-1936299.jpg"
                    }}>

                    <div id="resume-title">
                        <b>PORTFOLIO</b>
                    </div>
                </header>
                <br />

                <div className="container">
                    <Projects />

                </div >

                <Footer />
            </div>
        )
    }
}
export default Work