import React, { Component } from 'react';
import "./style.css"

class Projects extends Component {
    render() {
        return (
            <div className="container">
                {/* Page Heading */}
                <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
                </h1>

                {/* Project One */}
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"https://github.com/scclark85/shore-parkway-wellness"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="/images/Shore-Pkw-Wellness.png" alt="shore-pkwy" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/shore-parkway-wellness"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Shore Parkway Wellness</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
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
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/bacc-restoration"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        BACC Restoration</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
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
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/project3"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        GameAdvisor</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
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
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"https://github.com/scclark85/RecipeTown"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Recipe Town</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                            </div>
                        </div>
                    </div>

                    {/* Project Five */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"#"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"#"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Project One</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                            </div>
                        </div>
                    </div>

                    {/* Project Six */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <a href={"#"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={"#"}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Project One</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
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


