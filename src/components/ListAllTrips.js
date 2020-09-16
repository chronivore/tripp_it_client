import React, { useState, useEffect } from 'react';
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

const ListAllTrips = (props) => {

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
                  <Card.CardTitle>`${trip.fromLocation} to ${trip.toLocation}`</Card.CardTitle>
                  <Card.Body>
                    <h2>Itinerary</h2>
                    <p>`Arriving to ${trip.toLocation} on ${trip.toDate}`</p>
                    <p>`Returning to ${trip.fromLocation} ${trip.fromDate}`</p>
                    <p>`Method of Travel: ${trip.travelType}`</p>
                    <p>`Reason of Travel: ${trip.tripType}`</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }

  return(

    <div>
        {listAllTrips()}
    </div> 
  )
}

export default ListAllTrips;