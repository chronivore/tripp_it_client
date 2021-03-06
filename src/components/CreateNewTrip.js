import React, { useState, useEffect } from 'react';
import Login from '../auth/Login';
import Auth from '../auth/Auth';
import Homepage from '../home/Homepage';
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
    Table, Form } from "reactstrap";
import APIURL from '../helpers/environment';
import FetchTrips from './FetchTrips';




const CreateNewTrip = (props) => {
    
    //const [trip, setTrip] = useState({});
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [travelType, setTravelType] = useState('');
    const [tripType, setTripType] = useState('');

    const handleSubmit = ((event) => {
        event.preventDefault();

        fetch(`${APIURL}/trip/`, {
            method: "POST",
            body: JSON.stringify({
                trip:{
                    fromLocation: fromLocation,
                    toLocation: toLocation,
                    fromDate: fromDate,
                    toDate: toDate,
                    travelType: travelType,
                    tripType: tripType,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then( response => response.json())
        .then(data => {
            console.log(data);
            props.setUpdatedList(data);
        })
        .catch(err => console.log(err))
    })

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Card id="where">
                        <CardBody>
                            <CardTitle>Where</CardTitle>
                            <span>We're going to (City, State, Country, I don't care lol) : </span>
                            <br />
                            <input type="text" name="Destination" onChange={(e) => setFromLocation(e.target.value)} required />
                            <br />
                            <span>We're returning to (City, State, Country, I don't care lol) : </span>
                            <br />
                            <input type="text" name="Return" onChange={(e) => setToLocation(e.target.value)} required />
                            <br />
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>When</CardTitle>
                            <span>Departure: </span>
                            <input type="date" name="departureDate" pattern="[0-9]{8}" onChange={(e) => {setFromDate(e.target.value); console.log(e.target.value)}} required/>
                            <br />
                            <br />
                            <span>Return: </span>
                            <input type="date" name="returnDate" pattern="[0-9]{8}" onChange={(e) => {setToDate(e.target.value); console.log(e.target.value)}} required/>
                            <br />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>How</CardTitle>
                            <span>How are we getting there? (Plane, Car, Train, Boat... Catapult) : </span>
                            <br />
                            <input type="text" name="TravelType" onChange={(e) => setTravelType(e.target.value)} required />
                            <br />
                            <span>Why are we going there? (Business, pleasure... cataclysm?) : </span>
                            <br />
                            <input type="text" name="TripType" onChange={(e) => setTripType(e.target.value)} required />
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Button  color="info" className="btnClick">Create</Button>
            </Row>
            </Form>
        </div>
    )
}

export default CreateNewTrip;