import React, { Component } from 'react';
import Projects from "../components/Projects";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Modal from "../components/Modal"
import "./style.css"

class Home extends Component {

    render() {
        return (
            <div>
                <Main />
                <Projects />

                <div className="container">
                <Modal />
                </div>
                <br />

                <Footer />
            </div>

        )
    }
}
export default Home