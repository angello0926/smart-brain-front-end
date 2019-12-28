import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';
import { Container, Row, Col } from 'reactstrap';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
    if (isSignedIn) {
      return (
        <nav className="header navbar navbar-expand-md navbar-dark">
          <Container>
            <Row className="w-100 items-center">
              <Col sm={3}>
                <a className="mr-auto navbar-brand" href="#" title="Home">Smart Brain</a>
              </Col>
              <Col sm={9}>
                <ProfileIcon toggleModal={toggleModal} onRouteChange={onRouteChange}/>
              </Col>
            </Row>
          </Container>
        </nav>
      );
    } else {
      return (
        <nav className="header navbar navbar-expand-md navbar-dark">
          <Container>
            <Row className="w-100 items-center">
              <Col sm={3}>
                <a className="mr-auto navbar-brand" href="#" title="Home">Smart Brain</a>
              </Col>
              <Col sm={9} className="tr">
                <a className="nav-link f5 lh-copy dib pointer" onClick={() => onRouteChange('signin')} >Sign In</a>
                <a className="nav-link f5 lh-copy dib pointer" onClick={() => onRouteChange('register')} >Register</a>              
              </Col>
            </Row>
          </Container>
        </nav>
      );
    }
}

export default Navigation;