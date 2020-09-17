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
import APIURL from '../helpers/environment';

const ListAllTrips = (props) => {

  return(
    <div id="listAllTrips">

        {props.trips.map( trip => {
        
            return(
                <div key={trip.id}>
                    <Card>
                        <CardBody>
                            <CardTitle>Trip</CardTitle>
                            <CardText>From: {trip.fromLocation}</CardText>
                            <CardText>To: {trip.toLocation}</CardText>
                            <CardText>When: {trip.fromDate}</CardText>
                            <CardText>Type: {trip.travelType}</CardText>
                            <CardText>Reason: {trip.tripType}</CardText>
                            <Button>Edit</Button>
                            <Button>Delete</Button>

                        </CardBody>
                    </Card>
                </div>
            )
        })}
    </div> 
  )
}

export default ListAllTrips;