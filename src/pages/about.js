import React, { Component } from 'react';
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
                    <div id="about">
                        <div className="row">

                            <div>
                                <div className="col-1">
                                    <img
                                        className="taj"
                                        src="/images/me-taj.png"
                                        alt="img-1"
                                    />

                                </div>
                            </div>

                            <div className="col-8">
                                <h3>How it all began...</h3>
                                <br />
                                <p>During my school years in Racine, WI, I realized that I have a visual eye and a passion for creative problem-solving. My interest in design and architecture only increased while living in Mexico City and Milan and having the opportunity to travel to various places around the world.</p>

                                <p>To build my creative expertise, I graduated with a Bachelor of Fine Arts in Interior Design in Chicago. Throughout my career, I’ve had strong learning experiences ranging from design consultation to customer service to sales to business management and entrepreneurship. These opportunities have made me the person I am today and have shaped where I want to go next.</p>
                            </div>
                            <br />
                        </div>
                        <br />

                        <div className="row">

                            <div className="col-11">
                                <h3>Why web development?</h3>
                                <br />
                                <p>While I find my design background fulfilling, I’m excited to couple that with my newly acquired technical skills to take my career to the next level. </p>

                                <p>My interest in web development started with a casual conversation with a family member in the IT industry and has turned into a career path that I’ve become passionate and excited about. I first taught myself the basics, then took a class and realized, “wow, I really like this and am serious about it.”  From there I completed the University of Arizona Coding Bootcamp—a 12-week intensive program in user interface, database design and essential programming languages—and have taken on various freelance projects to advance my technical expertise. </p>

                                <p>We are in the age where digital is taking over, and I want to be a part of it.  I’m eager to contribute the skills that I already have and continue to learn and grow. With my design background, business experience and growing technical expertise, I am ready to solve new problems and drive impact in an innovative, fast-paced environment.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <h3>Who is Sarah?</h3>
                                <br />
                                <p>If I’m not building web applications, I’m most likely hanging out with my two little pups, Foxy and Mia, and my family and friends, checking out new restaurants in the area, enjoying some wine, or just relaxing and catching up on my favorite shows.  I also enjoy hiking and traveling, which has always inspired me.</p>

                                <p><b>Please reach out if you’d like to learn more and connect. Thank you for stopping by!</b></p>
                                <br />

                                <Modal />
                            </div>

                            <div>
                                <div className="col-12">
                                    <img
                                        className="pups"
                                        src="/images/mia-foxy.png"
                                        alt="img-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                </div>

                <Footer />
            </div >
        )
    }
}
export default About