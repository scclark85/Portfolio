import React, { Component } from 'react';
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import "./style.css"

class About extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="jumbotron"
                    style={{
                        color: "white",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: "url(/images/bookcase-books-bookshelf-1166657.jpg"
                    }}>
                    <div className="container">
                        <h1 id="about-title">
                            <b>ABOUT SARAH</b>
                        </h1>
                    </div>
                </div>

                <div className="container" >
                    <div className="row">

                        <div>
                            <div className="col-1">
                                <img
                                    className="taj"
                                    src="/images/me-taj.png"
                                    alt="img-2"
                                />

                            </div>
                        </div>

                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <br />
                    </div>
                    <br />

                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <br />

                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <Modal />
                </div>
            </div>
        )
    }
}
export default About