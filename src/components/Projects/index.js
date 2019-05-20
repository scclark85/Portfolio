import React, { Component } from 'react';
import "./style.css"

class Projects extends Component {
    render() {
        return (
            <div className="container">

                {/* Project One */}
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://github.com/scclark85/shore-parkway-wellness"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="/images/Shore-Pkw-Wellness.png" alt="shore-pkwy" /></a>
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
                                <p className="card-text">This is a web application being made for a doctor in Brooklyn. Site is currently under construction and projected to be completed in June.</p>
                                <p className="card-text"><b>Technologies use:</b> React, CSS, JavaScript, npm-Modules, Node, Nodemailer, Google Maps API, PhotoShop, and Adobe XD. </p>
                                <p className="card-text"><b>Involvment:</b> Overseeing entire project, and strengthening my skills in React.  <i>Goal: to add online booking feature.</i></p>
                                <p className="card-text"><b>Please click on image for demo or image title to see GitHub page.</b></p>
                            </div>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://github.com/scclark85/bacc-restoration"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="/images/BACC-Restoration.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(47, 104, 71, .2)",
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
                                <p className="card-text">This is a web application being made for a contractor in Wisconsin. Site is currently under construction and projected to be completed in June.</p>
                                <p className="card-text"><b>Technologies use:</b> React, CSS, JavaScript, npm-Modules, Node, Nodemailer, and PhotoShop.</p>
                                <p className="card-text"><b>Involvment:</b> Overseing entire project.  Working on how to use Nodemailer and strengthening my skills in react.</p>
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
                                <img class="card-img-top" src="/images/GameAdvisor.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(222, 226, 224)",
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
                                <p className="card-text">The goal of this project is to help parents understand video game ratings and screen content for their children</p>
                                <p className="card-text"><b>Technologies use:</b> Node, Express, Passport, Axios, Cheerio, npm-Modules, Twitch/Giant Bomb/IGDB APIs, React, and W3.css. Used Heroku for site deployment. </p>
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
                                <img class="card-img-top" src="/images/Recipe-Town.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(173, 3, 3, .2)",
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
                                <p className="card-text">This is an application that generates recipes that display on the main page of the application, and allows users to research recipes of their choice.</p>
                                <p className="card-text"><b>Technologies use:</b> HTML, CSS, Materialize, JavaScript, Font Awesome, Full Calendar, Handlebars, Sequalize, npm-Modules, Express, and Edama API.  Used Heroku for site deployment.</p>
                                <p className="card-text"><b>Involvment:</b> I worked on Full Calendar and the API along with one of my team members.</p>
                                <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                            </div>
                        </div>
                    </div>

                    {/* Project Five */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://recipe-town.herokuapp.com/"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="/images/Recipe-Town.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(173, 3, 3, .2)",
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
                                <p className="card-text">This is an application that generates recipes that display on the main page of the application, and allows users to research recipes of their choice.</p>
                                <p className="card-text"><b>Technologies use:</b> HTML, CSS, Materialize, JavaScript, Font Awesome, Full Calendar, Handlebars, Sequalize, npm-Modules, Express, and Edama API.  Used Heroku for site deployment.</p>
                                <p className="card-text"><b>Involvment:</b> I worked on Full Calendar and the API along with one of my team members.</p>
                                <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                            </div>
                        </div>
                    </div>

                    {/* Project Six */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://recipe-town.herokuapp.com/"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="/images/Recipe-Town.png" alt="" /></a>
                            <div className="card-body"
                                style={{
                                    backgroundColor: "rgb(173, 3, 3, .2)",
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
                                <p className="card-text">This is an application that generates recipes that display on the main page of the application, and allows users to research recipes of their choice.</p>
                                <p className="card-text"><b>Technologies use:</b> HTML, CSS, Materialize, JavaScript, Font Awesome, Full Calendar, Handlebars, Sequalize, npm-Modules, Express, and Edama API.  Used Heroku for site deployment.</p>
                                <p className="card-text"><b>Involvment:</b> I worked on Full Calendar and the API along with one of my team members.</p>
                                <p className="card-text"><b>Please click on image to see website or image link for GitHub page.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

            </div>
        )
    }
}

export default Projects


