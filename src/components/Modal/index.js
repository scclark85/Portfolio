
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

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
                    <Button className="btn btn-light btn-lg" onClick={this.toggle}>{this.props.buttonLabel} <b>LETS CONNECT</b></Button>
    
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;