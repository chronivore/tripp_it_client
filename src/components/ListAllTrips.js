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
    //const [trips, setTrips] = useState([]);
    
    /* useEffect(() => {
        fetch(`${APIURL}/trip/`, {
            method: "GET",
            headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.sessionToken
            }),
        })
            .then((res) => res.json())
            .then((trips) => {
                console.log(trips);
            })
            .catch(err => console.log(err));
    }, []); */


        /* console.log(setTrips);

        let mappedArrays = trips.map( trip => {
            console.log('This is a trip!');
            return(
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle>Trip</CardTitle>
                            <CardText>From</CardText>
                            <CardText>To</CardText>
                            <CardText>When</CardText>
                            <CardText>Type</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        
        return mappedArrays;
    } */
       console.log(props.trips)

       console.log(props.trips.length)

        

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