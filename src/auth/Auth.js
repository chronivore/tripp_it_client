import React, { useState, useEffect } from "react";
import { Container, Row, Button, Collapse, Card, CardBody } from "reactstrap";
import SignUp from "./SignUp";
import Login from "./Login";
import { CSSTransition } from 'react-transition-group';
import APIURL from '../helpers/environment';

const Auth = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggle = () => {setIsOpen(!isOpen); }
//   const toggleLogin = () => {setIsLoginOpen(!isLoginOpen);setIsSignUpOpen(!isSignUpOpen)}

  return (
    <Container>
      {/* <h1 className="mainTitle"> Tripp It!!</h1> */}
      <Row  >
      {isOpen ? (
            <div className="mainDiv">
              <Login updateToken= {props.updateToken} email={email} password={password} 
              setEmail={setEmail} setPassword={setPassword}
              />
              <br/>
              <h6>Don't have an account?<a href="#" onClick={toggle}>Sign Up</a></h6>
            </div>
          ) : (
            <div className="mainDiv">
              <SignUp updateToken={props.updateToken} firstName={props.firstName} lastName={props.lastName}
              email={email} password={password} setFirstName={props.setFirstName} setLastName={props.setLastName}
              setEmail={setEmail} setPassword={setPassword}
              />
              <br/>
              <h6>Go back? <a href="#" onClick={toggle}>Login</a></h6>
            </div>
          )}
      </Row>
    </Container>
  );
};

export default Auth;
