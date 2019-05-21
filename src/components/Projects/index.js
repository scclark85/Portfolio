import React, { Component } from 'react';
import "./style.css"

class Projects extends Component {
    render() {
        return (
            <div id="work">

                <div className="container">
                <br />
                <br />

                    {/* Project One */}
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://drive.google.com/file/d/1VL7iKlVljnQTqvyA8yqcNx_zSiYcLy6P/view?usp=sharing"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/Shore-Pkw-Wellness.png" alt="shore-pkwy" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/shore-parkway-wellness"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            Shore Parkway Wellness</a>
                                    </h4>
                                    <p className="card-text">This is a responsive web application being made for a doctor in Brooklyn. Site is currently under construction and projected to be completed in June.</p>
                                    <p className="card-text"><b>Technologies use:</b> React, CSS, JavaScript, npm-Modules, Nodejs, Nodemailer, Google Maps API, PhotoShop, and Adobe XD. </p>
                                    <p className="card-text"><b>Involvment:</b> Overseeing entire project, and strengthening my skills in React.  <i>Goal: to add online booking feature.</i></p>
                                    <p className="card-text"><b>Please click on image for demo or image title to see GitHub page.</b></p>
                                </div>
                            </div>
                        </div>

                        {/* Project Two */}
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://drive.google.com/file/d/1l5F5lIOuyd1Q6bRxF2KZDf62k6MZMKmG/view?usp=sharing"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/BACC-Restoration.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/bacc-restoration"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            BACC Restoration</a>
                                    </h4>
                                    <p className="card-text">This is a responsive web application being made for a contractor in Wisconsin. Site is currently under construction and projected to be completed in June.</p>
                                    <p className="card-text"><b>Technologies use:</b> React, CSS, JavaScript, npm-Modules, Nodejs, Nodemailer, and PhotoShop.</p>
                                    <p className="card-text"><b>Involvment:</b> Overseeing entire project.  Working on how to use Nodemailer and strengthening my skills in react.</p>
                                    <p className="card-text"><b>Please click on image for demo or image title to see GitHub page.</b></p>
                                </div>
                            </div>
                        </div>

                        {/* Project Three */}
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://banana-cupcake-16306.herokuapp.com/"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/GameAdvisor.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/project3"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            GameAdvisor</a>
                                    </h4>
                                    <p className="card-text">The goal of this project is to help parents understand video game ratings and screen content for their children.  This is a responsive application.</p>
                                    <p className="card-text"><b>Technologies use:</b> Nodejs, Express, Passport, Axios, Cheerio, npm-Modules, Twitch/Giant Bomb/IGDB APIs, React, and W3.css. Used Heroku for site deployment. </p>
                                    <p className="card-text"><b>Involvment:</b> I worked on all the APIs, helped set up the users database, scrapped information from the NPD, and ESRB ratings sites, and added the scrapped information onto our website.</p>
                                    <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Project Four */}
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://recipe-town.herokuapp.com/"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/Recipe-Town.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/RecipeTown"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            Recipe Town</a>
                                    </h4>
                                    <p className="card-text">This is a responsive application that generates recipes that display on the main page of the application, and allows users to research recipes of their choice.</p>
                                    <p className="card-text"><b>Technologies use:</b> HTML, CSS, Materialize, JavaScript, Font Awesome, Full Calendar, Handlebars, Sequalize, npm-Modules, Nodejs, Express, and Edama API.  Used Heroku for site deployment.</p>
                                    <p className="card-text"><b>Involvment:</b> I worked on Full Calendar and the API along with one of my team members.</p>
                                    <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                                </div>
                            </div>
                        </div>

                        {/* Project Five */}
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://drive.google.com/file/d/1fWKamO3ddC3I4dVf4qVpvpiQavcc7HZU/view?usp=sharing"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/Bamazon.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/Bamazon"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            Bamazon</a>
                                    </h4>
                                    <p className="card-text">Bamazon is an Amazon-like store front. This application presents two interfaces: customer and manager. Customers will be able to see a table containing all items available along with the department, and price of the item. If the customer types an invalid ID, they will get notified. They will recieve a final reciept of their purchase.</p>
                                    <p className="card-text"><b>Technologies use:</b> Node.js and MySQL.</p>
                                    <p className="card-text"><b>Involvment:</b> Oversaw entire project.  Strengthened my skills in back-end development.</p>
                                    <p className="card-text"><b>Please click on image to see demo or image link for GitHub page.</b></p>
                                </div>
                            </div>
                        </div>

                        {/* Project Six */}
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://drive.google.com/file/d/1nU6IgSUaBMz4UJgJ9YQYonyQSLHCsJNf/view?usp=sharing "}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/Liri Node.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/liri-node-app"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            Liri Node App</a>
                                    </h4>
                                    <p className="card-text">LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.</p>
                                    <p className="card-text"><b>Technologies use:</b>JavaScript, Nodejs, npm-Modules: Node-Spotify-API, Moment, DotEnv, Axios, APIs for OMDB and ands in Town.</p>
                                    <p className="card-text"><b>Involvment:</b> Oversaw entire project.  Strengthened my skills with APIs and Nodejs.</p>
                                    <p className="card-text"><b>Please click on image to see demo (there is sound) or image link for GitHub page.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Project Seven */}
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <a href={"https://drive.google.com/file/d/1iw_7tRZLZ9uFWBa_NkmUQFLoWTPfZWdh/view?usp=sharing"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="card-img-top" src="/images/Crystals Collector.png" alt="" /></a>
                                <div className="card-body"
                                    style={{
                                        backgroundColor: "rgb(140, 114, 114, .2)",
                                        color: "rgb(49, 49, 49)"
                                    }}>
                                    <h4 className="card-title">
                                        <a href={"https://github.com/scclark85/Bamazon"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "rgb(49, 49, 49)"
                                            }}>
                                            Crystals Collector</a>
                                    </h4>
                                    <p className="card-text">There are four crystals with a specific amount of points that goes towards a random number.  Users wins the game by matching the total score to random number generated or loses the game if the total score goes above the random number. The value of each crystal is hidden until it's clicked. Each time when the game starts, the game changes the values of each crystal.</p>
                                    <p className="card-text"><b>Technologies use:</b> HTML, CSS, JQuery, and JavaScript.</p>
                                    <p className="card-text"><b>Involvment:</b> Oversaw entire project.  Strengthened my skills in front-end development and use of JQuery and JavaScript.</p>
                                    <p className="card-text"><b>Please click on image to see demo or image link for GitHub page.</b></p>
                                </div>
                            </div>
                        </div>

                        {/* Project Eight */}
                        {/* <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://github.com/scclark85/bacc-restoration"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img className="card-img-top" src="/images/BACC-Restoration.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(140, 114, 114, .2)",
                                    color: "rgb(49, 49, 49)"
                                }}>
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/bacc-restoration"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "rgb(49, 49, 49)"
                                        }}>
                                        BACC Restoration</a>
                                </h4>
                                <p className="card-text">This is a responsive web application being made for a contractor in Wisconsin. Site is currently under construction and projected to be completed in June.</p>
                                <p className="card-text"><b>Technologies use:</b> React, CSS, JavaScript, npm-Modules, Node, Nodemailer, and PhotoShop.</p>
                                <p className="card-text"><b>Involvment:</b> Overseeing entire project.  Working on how to use Nodemailer and strengthening my skills in react.</p>
                                <p className="card-text"><b>Please click on image for demo or image title to see GitHub page.</b></p>
                            </div>
                        </div>
                    </div> */}

                        {/* Project Nine */}
                        {/* <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://banana-cupcake-16306.herokuapp.com/"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img className="card-img-top" src="/images/GameAdvisor.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(140, 114, 114, .2)",
                                    color: "rgb(49, 49, 49)"
                                }}>
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/project3"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "rgb(49, 49, 49)"
                                        }}>
                                        GameAdvisor</a>
                                </h4>
                                <p className="card-text">The goal of this project is to help parents understand video game ratings and screen content for their children.  This is a responsive application.</p>
                                <p className="card-text"><b>Technologies use:</b> Node, Express, Passport, Axios, Cheerio, npm-Modules, Twitch/Giant Bomb/IGDB APIs, React, and W3.css. Used Heroku for site deployment. </p>
                                <p className="card-text"><b>Involvment:</b> I worked on all the APIs, helped set up the users database, scrapped information from the NPD, and ESRB ratings sites, and added the scrapped information onto our website.</p>
                                <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <br />
                    <br />

                </div>
            </div>
        )
    }
}

export default Projects


