import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Footer from "../components/Footer"
import "./style.css"

class About extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Nav />
                </div>

                <header className="jumbotron"
                    style={{
                        backgroundImage: "url(/images/bookcase-books-bookshelf-1166657.jpg",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        color: "white"
                    }}>

                    <Animated className="fadeIn"><div id="about-title">
                        <b>ABOUT SARAH</b>
                        <p style={{
                            fontSize: "20px",
                        }}>
                        </p>
                    </div></Animated>
                </header>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <img className="img-fluid" src="/images/me-taj.png" alt="img-1" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4" id="about">How it all began...</h2>
                                    <p id="about">During my school years in Racine, WI, I realized that I have a visual eye and a passion for creative problem-solving. My interest in design and architecture only increased while living in Mexico City and Milan and having the opportunity to travel to various places around the world.</p>
                                    <p id="about">To build my creative expertise, I graduated with a Bachelor of Fine Arts in Interior Design in Chicago. Throughout my career, I’ve had strong learning experiences ranging from design consultation to customer service to sales to business management and entrepreneurship. These opportunities have made me the person I am today and have shaped where I want to go next.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <h2 className="display-4" id="about">Why web development?</h2>
                                    <p id="about">While I find my design background fulfilling, I’m excited to couple that with my newly acquired technical skills to take my career to the next level.</p>
                                    <p id="about">My interest in web development started with a casual conversation with a family member in the IT industry and has turned into a career path that I’ve become passionate and excited about. I first taught myself the basics, then took a class and realized, “wow, I really like this and am serious about it.”  From there I completed the University of Arizona Coding Bootcamp—a 12-week intensive program in user interface, database design and essential programming languages—and have taken on various freelance projects to advance my technical expertise. </p>
                                    <p id="about">We are in the age where digital is taking over, and I want to be a part of it.  I’m eager to contribute the skills that I already have and continue to learn and grow. With my design background, business experience and growing technical expertise, I am ready to solve new problems and drive impact in an innovative, fast-paced environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="img-fluid" src="/images/mia-foxy.png" alt="img-2" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4" id="about">Who is Sarah?</h2>
                                    <p id="about">If I’m not building web applications, I’m most likely hanging out with my two little pups, Foxy and Mia, and my family and friends, checking out new restaurants in the area, enjoying some wine, or just relaxing and catching up on my favorite shows.  I also enjoy hiking and traveling, which have always inspired me.</p>
                                    <p id="about"><b>Please reach out if you’d like to learn more and connect. Thank you for stopping by!</b></p>
                                    <br />

                                    <Modal />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div >
        )
    }
}
export default About