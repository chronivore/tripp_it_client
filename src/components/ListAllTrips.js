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

    //let baseURL = 'https://ana-tripp-it-server.herokuapp.com/trip/';

  useEffect(() => {
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
            listAllTrips(trips);
        })
        .catch(err => console.log(err));
  }, []);

  const listAllTrips = (trips) => {
    console.log(trips);
    console.log(typeof(trips));

    //for some goddamn reason trips is an array of objects, yet can't be iterated using
    //traditional array methods (for, forEach, for of). so far the only function way
    //to loop through every element is for in, but indexing is needed to access each object in the array??
    //let tripsArray = [];
    for (let trip in trips) {
        console.log(trips[trip]);
        let temp = {};
        console.log('Trip A:', Date(trips[trip].fromDate));
        console.log('Trip B:', Date(trips[trip++].fromDate));
        console.log('Trip Number:',trip);
        //console.log(Date(trips[trip].fromDate) <= Date(trips[trip++].fromDate)) 
        //tripsArray[trip-1] = trips[trip-1];
    }

    //console.log(tripsArray);


    //console.log(tripsByDate);
    /* for(let i=0 ; i < trips.length ; i++){

        let temp = {};

        console.log(trips[i].fromDate)
        if( Date(trip.fromDate) < Date(trips[index+1].fromDate) ){
            temp = trips[index+1];
            trips[index+1] = trips[index];
            trips[index] = temp;
        }
      
    } */
    
    return (
        <div>
          <Card>
          <CardTitle>Hello</CardTitle>
            <CardBody>
                Hello?
            </CardBody>
          </Card>
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