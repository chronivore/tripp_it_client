
import React, { useState, useEffect } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardTitle, 
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  Table } from "reactstrap";
import ListAllTrips from '../components/ListAllTrips';
import CreateNewTrip from '../components/CreateNewTrip';
import RandomImages from "./RandomImages";
import FetchTrips from '../components/FetchTrips';


const Homepage = (props) => {
  const [arrImages, setArrImages] = useState([]);

  return(
      <div>
       <RandomImages setArrImages={setArrImages}/>
        {/* <h1 id="tripp">tripp.it</h1> */}

        <Row>
                <Col>
                    <Card id="where" >
                        <CardBody >
                        <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                            <CardTitle className="cardHeaders"><a className="cardHeaders" href="#createTripSection">Where</a></CardTitle>
                            <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                        <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                        <CardTitle className="cardHeaders"><a className="cardHeaders" href="#createTripSection">When</a></CardTitle>
                        <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                        <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                        <CardTitle className="cardHeaders"><a className="cardHeaders" href="#createTripSection">How</a></CardTitle>
                        <CardImg className="randomImages" src={arrImages[Math.floor(Math.random() * Math.floor(arrImages.length-1))]}
                         alt="image not loading" />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        <section id="createTripSection">
        <CreateNewTrip sessionToken={props.sessionToken} />
        </section>
        <FetchTrips sessionToken={props.sessionToken} />
      </div>
  )

  }

  export default Homepage;

