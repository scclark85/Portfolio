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
                                <a href={"https://naughty-hodgkin-4dced1.netlify.com/"}
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
                                    <p className="card-text">The responsive web application is for a Brooklyn Doctor. Currently under construction with projected completion in July.</p>
                                    <p className="card-text"><b>Technologies used:</b> React, Bootstrap, CSS, JavaScript, npm-Modules, Nodejs, Nodemailer, Google Maps API, PhotoShop, and Adobe XD</p>
                                    <p className="card-text"><b>Involvement:</b> Overseeing entire project, strengthening my React skills, and working to add online booking feature.</p>
                                    <p className="card-text"><b>Please click on image to view site demo or project title for the GitHub page.</b></p>
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
                                    <p className="card-text">The responsive web application is for a contractor in Wisconsin. Currently under construction with projected completion in July.</p>
                                    <p className="card-text"><b>Technologies used:</b> React, Bootstrap, CSS, JavaScript, npm-Modules, Nodejs, Nodemailer, and PhotoShop</p>
                                    <p className="card-text"><b>Involvement:</b> Overseeing entire project and strengthening my skills in React and Nodemailer.</p>
                                    <p className="card-text"><b>Please click on image to view a demo or project title for GitHub page.</b></p>
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
                                    <p className="card-text">The responsive application helps parents understand video game ratings and screen content for children.</p>
                                    <p className="card-text"><b>Technologies used:</b> Nodejs, Express, Passport, Axios, Cheerio, npm-Modules, Twitch/Giant Bomb/IGDB APIs, React, W3.css, and Heroku for site deployment </p>
                                    <p className="card-text"><b>Involvement:</b> I worked on all the APIs, helped set up the user database, scraped information from the NPD and ESRB ratings sites, and added the scraped information to the website.</p>
                                    <p className="card-text"><b>Please click on image to visit the website or project title for the GitHub page.</b></p>
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
                                    <p className="card-text">The responsive application allows users to research recipes of their choice and displays generated recipes on the main page.</p>
                                    <p className="card-text"><b>Technologies used:</b> HTML, CSS, Materialize, JavaScript, Font Awesome, Full Calendar, Handlebars, Sequalize, npm-Modules, Nodejs, Express, Edama API, and Heroku for site deployment</p>
                                    <p className="card-text"><b>Involvement:</b> I created the Full Calendar and worked with a team member on the API.</p>
                                    <p className="card-text"><b>Please click on image to visit the website or project title for the GitHub page.</b></p>
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
                                    <p className="card-text">Bamazon is an Amazon-like store-front. The application presents two interfaces: customer and manager. Customers see a table containing available products along with department, price and stock quantity. If customers enter an invalid ID, they will be notified. A final reciept is provided at purchase.  Managers can control inventory and add items to inventory.</p>
                                    <p className="card-text"><b>Technologies used:</b> Node.js and MySQL</p>
                                    <p className="card-text"><b>Involvement:</b> Oversaw entire project.  Strengthened my skills in back-end development.</p>
                                    <p className="card-text"><b>Please click on image to see a demo or project title for the GitHub page.</b></p>
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
                                    <p className="card-text">LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data. LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.</p>
                                    <p className="card-text"><b>Technologies used:</b>JavaScript, Nodejs, npm-Modules (Node-Spotify-API), Moment, DotEnv, Axios, APIs for OMDB and Bands in Town</p>
                                    <p className="card-text"><b>Involvement:</b> Oversaw entire project.  Strengthened my skills in APIs and Nodejs.</p>
                                    <p className="card-text"><b>Please click on image to view a demo (there is sound) or project title for the GitHub page.</b></p>
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
                                    <p className="card-text">The interactive game consists of four crystals.  Each crystal has a number of points.  There's also a random number generated at the top.  Users win the game if their total score matches the random number.  Users lose if their total score goes above the number.  The value of each crystal is hidden until clicked.  Every time the game starts, the crystal values change.</p>
                                    <p className="card-text"><b>Technologies used:</b> HTML, Bootstrap, CSS, JQuery, and JavaScript</p>
                                    <p className="card-text"><b>Involvement:</b> Oversaw entire project.  Strengthened my skills in front-end development, JQuery and JavaScript.</p>
                                    <p className="card-text"><b>Please click on image to view a demo or project title for the GitHub page.</b></p>
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


