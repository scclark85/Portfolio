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

                    <Projects />

                </div >

                <Footer />
            </div>
        )
    }
}
export default Work