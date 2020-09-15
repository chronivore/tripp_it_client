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

const Trips = (props) => {


  let baseURL = 'https://ana-tripp-it-server.herokuapp.com/trip/';

  useEffect(() => {
    fetch(baseURL, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      })
        .then((res) => res.json())
        .then((trips) => {
            console.log(trips);
        })
        .catch(err => console.log(err));
  }, []);

  const listAllTrips = (trips) => {
    let tripsByDate = trips.sort( ( tripA, tripB ) => tripB.Date - tripA.Date )
    return (
      <div>
        {tripsByDate.map( trip => {
          return (
            <Row>
              <Col>
                <Card>
                  <CardTitle></CardTitle>
                </Card>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }



  const Example = (props) => {
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
  };

  return(
      <div>
        <Button onClick={props.clickLogout}>Logout</Button>
        <h1 id="tripp">tripp.it</h1>
          <Container fluid>
            <Row>
              <Col id="where"></Col>
              <Col id="when"></Col>
              <Col id="how"></Col>
            </Row>
          </Container>
      </div>
  )

  }

  export default Trips;
