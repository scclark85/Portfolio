import React from "react";
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./style.css"

const Footer = () => {
    return (

        <footer className="footer footer-fixed-bottom">
            <div className="container">
                <br />

                    <div className="footer-copyright row justify-content-center">
                        <p>&copy;{new Date().getFullYear()} <a className="footer-site">Sarah Clark </a></p>
                    </div>

            </div>
        </footer>

    );
}
export default Footer