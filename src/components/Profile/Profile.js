import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        }
    }

    onFormChange = (event) => {
        switch(event.target.name){
            case 'user-name':
                this.setState({name: event.target.value})
                break;
            case 'user-age':
                this.setState({age: event.target.value})
                break;
            case 'user-pet':
                this.setState({age: event.target.value})
                break;
            default:
                return;
        }
    }
    
    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ formInput: data})
        }).then(resp => {
            this.props.toggleModal();
            this.props.loadUser({...this.props.user, ...data});
        }).catch( err => console.log(err))
    }

    render() {
        const { user , toggleModal, isProfileOpen} = this.props;
        const { name , age, pet} = this.state;
        return  ( 
            <Modal isOpen={isProfileOpen}> 
                <ModalHeader>Profile</ModalHeader>
                <ModalBody>
                <Row>
                    <Col sm={3}><img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar"/></Col>
                    <Col sm={9}>
                        <h3>{this.state.name}</h3>
                        <p>Images Submitted: {user.entries}</p>
                        <p>Member since: { new Date(user.joined).toLocaleDateString()}</p>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <main className="pa1 black-80">
                        <div className="measure">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                className="pa2 input-reset ba bg-transparent w-100"
                                type="text"
                                name="user-name"
                                id="user-name"
                                placeholder={user.name}
                                onChange={this.onFormChange}
                                />
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Age</label>
                                <input
                                className="pa2 input-reset ba bg-transparent w-100"
                                type="text"
                                name="user-age"
                                id="user-age"
                                placeholder={user.age}
                                onChange={this.onFormChange}
                                />
                                <label className="db fw6 lh-copy f6" htmlFor="password">Pet</label>
                                <input
                                className="b pa2 input-reset ba bg-transparent w-100"
                                type="text"
                                name="user-pet"
                                id="user-pet"
                                placeholder={user.pet}
                                onChange={this.onFormChange}
                                />
                        </div>
                        </main>
                    </Col>
                </Row>
                
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.onProfileUpdate({name, age, pet})}>Save</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            );
    }
} 

export default Profile;