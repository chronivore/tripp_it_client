
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
import FetchTrips from '../components/FetchTrips';


const Homepage = (props) => {


  
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
        <Button onClick={props.clickLogout}>Logout</Button>
        <h1 id="tripp">tripp.it</h1>
        <FetchTrips sessionToken={props.sessionToken} />
        <CreateNewTrip sessionToken={props.sessionToken} />
        <ListAllTrips sessionToken={props.sessionToken} trips={props.trips}/>
      </div>
  )

  }

  export default Homepage;

  // import React, { useState, useEffect } from 'react';

// const baseUrl = "https://api.unsplash.com/search/collections"
// const key = "cWWHbdry3jWwqN-oVfyv2PTba6XsO1bpU7KmiS-YJQo";
// let pictureType = "travel";
// let number_of_entries = 100;

//  const Home = (props) => {

//     const fetchResults = () => {
//         let url = `${baseUrl}?query=${pictureType}&per_page=${number_of_entries}&client_id=${key}`;

//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => console.log(err));

//     }

//     return (
//         <div id="homeDiv">
//             <h1>HOME</h1>
//             {fetchResults()}
            
//         </div>
//     )
// }
// export default Home;