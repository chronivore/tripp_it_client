import React, { useState, useEffect } from "react";
import { Container, Row, Button, Collapse, Card, CardBody } from "reactstrap";
import SignUp from "./SignUp";
import Login from "./Login";
import { CSSTransition } from 'react-transition-group';
import APIURL from '../helpers/environment';

const Auth = (props) => {
  const [isOpen, setIsOpen] = useState(true);
//   const [isLoginOpen, setIsLoginOpen] = useState(true);

  const toggle = () => {setIsOpen(!isOpen); }
//   const toggleLogin = () => {setIsLoginOpen(!isLoginOpen);setIsSignUpOpen(!isSignUpOpen)}

  return (
    <Container>
      <h1 id="title"> Tripp It!!</h1>
      <Row  >
        {/* <Collapse  > */}
          {isOpen ? (
            <div className="mainDiv">
              <Login updateToken={props.updateToken} />
              <h5>Don't have an account?<a href="#" onClick={toggle}>Sign Up</a></h5>
            </div>
          ) : (
            <div className="mainDiv">
              <SignUp updateToken={props.updateToken} />
              <h5>
                Go back?
                <a href="#" onClick={toggle}>
                  Login
                </a>
              </h5>
            </div>
          )}
        {/* </Collapse> */}

        {/* <Collapse isOpen={isSignUpOpen} timeout={{enter: 200, exit: 200}}>
          {isSignUpOpen ? (
            <div>
              <SignUp updateToken={props.updateToken} />
              <h5>
                Go back to Login?
                <a href="#" onClick={toggleLogin}>
                  Login
                </a>
              </h5>
            </div>
          ) : (
            ""
          )}
        </Collapse> */}
      </Row>
    </Container>
  );
};

export default Auth;
