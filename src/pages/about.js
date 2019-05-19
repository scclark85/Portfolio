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
                                <p>Born and raised in Wisconsin, I have always been a creative thinker.  Maybe it was from traveling around the world and realizing my love for art and architecture or maybe its because I've always had a visual mind.  Regardless, I found what I enjoy doing, and what I am good at so I moved to the big city of Chicago and received my Bachelor of Fine Art’s in Interior Design.</p>

                                <p>Throughout my career, I’ve had great opportunities and strong learning experiences beginning as an Intern, to working in customer service, to selling, to managing and owning a business.  These experiences have made me the person I am today and have led me in the direction I’m in.</p>
                            </div>
                            <br />
                        </div>
                        <br />

                        <div className="row">

                            <div className="col-11">
                                <h3>Why web development?</h3>
                                <br />
                                <p>Having a background in Design is definitely fulfilling, but I am ready to take my skills to the next level.  A casual conversation with a family member in the IT industry, about web development, turned into something I’m passionate and excited about.  That’s how my career in web development got started.  I taught myself the basics, then took a class and realized, “wow, I really do like this.”  We are in the age where digital is taking over, and I want to be a part of it.  I want to contribute the skills I already have and continue to grow.  Plus, it helps that I enjoy solving problems in a creative way.  </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <h3>Who is Sarah?</h3>
                                <br />
                                <p>If I’m not building web applications, I am most likely hanging out with my two little pups, Foxy and Mia, and/or my family, checking out new restaurants in the area enjoying some wine, or just relaxing and catching up on some good shows.  I also like hiking and traveling as this inspires me and teaches me new things.</p>

                                <p><b>Please feel free to reach out if you'd like to know more or to just connect.</b></p>
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