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
    Table } from "reactstrap";
import APIURL from '../helpers/environment';




const CreateNewTrip = (props) => {
    
    const [trip, setTrip] = useState({});
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [travelType, setTravelType] = useState('');
    const [tripType, setTripType] = useState('');

    const handleSubmit = ((event) => {
        event.preventDefault();
        //console.log(firstName,lastName,email,password);

        fetch(`${APIURL}/trip/`, {
            method: "POST",
            body: JSON.stringify({
                trip:{
                    fromLocation: fromLocation,
                    toLocation: toLocation,
                    fromDate: fromDate,
                    toDate: toDate,
                    travelType: travelType,
                    tripType: tripType
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then( response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
    })

    return(
        <div>
            <Row>
                <Col>
                    <Card id="where">
                        <CardBody>
                        <CardImg width="100%" src="../assets/chickboat.jpeg" alt="chickonaboat" />
                            <CardTitle>Where</CardTitle>
                        </CardBody>
                       
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                        <CardTitle>When</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                        <CardTitle>How</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Button>Create</Button>
            </Row>
        </div>
    )
    
}

export default CreateNewTrip;