
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Link } from "react-router-dom";
import "./style.css"

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            unmountOnClose: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    changeUnmountOnClose(e) {
        let value = e.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }

    render() {
        return (
            <div>
                <Button className="btn btn-light btn-lg" onClick={this.toggle}>{this.props.buttonLabel} <b>GET IN TOUCH</b></Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader className="m-header" toggle={this.toggle}>Lets Connect:</ModalHeader>
                    <ModalBody>
                        {/* <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} /> */}
                        <div>
                            <p> Phone: <a className="phone" href="tel:+312-504-5391">
                                312-504-5391
                        </a></p>
                        </div>

                        <div>
                            <p> Email: <a className="email" href="mailto:sarahchristinec85@gmail.com">
                                sarahchristinec85@gmail.com
                        </a></p>
                        </div>

                        <div className="network">
                            <a className="fab fa-3x fa-github"
                                href={
                                    "https://github.com/scclark85"
                                }
                                target="_blank"
                                rel="noopener noreferrer">
                            </a>

                            <a className="fab fa-3x fa-linkedin-in"
                            style={{
                                height: "24px"
                            }}
                                href={
                                    "https://www.linkedin.com/in/sarah-clark-7aba2514/"
                                }
                                target="_blank"
                                rel="noopener noreferrer">
                            </a>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;