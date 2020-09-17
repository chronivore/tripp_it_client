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

   /*  const listAllTrips = () => {

        //for some goddamn reason trips is an array of objects, yet can't be iterated using
        //traditional array methods (for, forEach, for of). so far the only function way
        //to loop through every element is for in, but indexing is needed to access each object in the array??
        //let tripsArray = [];
        for (let trip in trips) {
            console.log(trips[trip]);
            setTrips(trip-1);
        }

        console.log(setTrips);

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
  return(
    <div>
        
    </div> 
  )
}

export default ListAllTrips;