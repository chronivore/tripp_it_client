
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
<<<<<<< HEAD
import RandomImages from "./RandomImages";
=======
import FetchTrips from '../components/FetchTrips';
>>>>>>> 3f2de1905ded5ba5f98b594e502f0b9a5b2d69d1


const Homepage = (props) => {
  const [arrImages, setArrImages] = useState([]);

//rendering planned trips refactored to ../components/ListAllTrips


 /*  const Example = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="../assets/" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }; */

  return(
      <div>
        {/* <Button onClick={props.clickLogout}>Logout</Button> */}
        {/* <h1 className="mainTitle">tripp.it</h1> */}
       <RandomImages setArrImages={setArrImages}/>
        <Button onClick={props.clickLogout}>Logout</Button>
        <h1 id="tripp">tripp.it</h1>
        <FetchTrips sessionToken={props.sessionToken} />
        <CreateNewTrip arrImages={arrImages} sessionToken={props.sessionToken} />
        <ListAllTrips sessionToken={props.sessionToken} trips={props.trips}/>
      </div>
  )

  }

  export default Homepage;

