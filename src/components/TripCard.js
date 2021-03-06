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
  Table,
} from "reactstrap";
import APIURL from "../helpers/environment";
import FetchTrips from "./FetchTrips";

const TripCard = (props) => {
  const trip = props.trip;

  const [fromLocation, setFromLocation] = useState(trip.fromLocation);
  const [toLocation, setToLocation] = useState(trip.toLocation);
  const [fromDate, setFromDate] = useState(trip.fromDate);
  const [toDate, setToDate] = useState(trip.toDate);
  const [travelType, setTravelType] = useState(trip.travelType);
  const [tripType, setTripType] = useState(trip.tripType);

  const editTrip = () => {
    fetch(`${APIURL}/trip/${trip.id}`, {
      method: "PUT",
      body: JSON.stringify({
        trip: {
          fromLocation: fromLocation,
          toLocation: toLocation,
          fromDate: fromDate,
          toDate: toDate,
          travelType: travelType,
          tripType: tripType,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.fetchTrips(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteTrip = () => {
    fetch(`${APIURL}/trip/${trip.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((tripsData) => {
        console.log(tripsData);
        props.fetchTrips();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div key={trip.id}>
      <Card>
        <CardBody>
          <CardTitle>Trip</CardTitle>
          <CardText>Departing to: {trip.fromLocation}</CardText>
          <input
            type="text"
            onChange={(e) => setFromLocation(e.target.value)}
            required
            value={fromLocation}
          />
          <CardText>Returning to: {trip.toLocation}</CardText>
          <input
            type="text"
            onChange={(e) => setToLocation(e.target.value)}
            required
            value={toLocation}
          />
          <CardText>Departure Date: {new Date(trip.fromDate).toString()}</CardText>
          <CardText>Departure Date: {new Date(trip.fromDate).toString().substring(0,16)}</CardText>
          <input
            type="date"
            onChange={(e) => setFromDate(e.target.value)}
            pattern="[0-9]{8}"
            required
            value={fromDate}
          />
          <CardText>Return Date: {new Date(trip.toDate).toString().substring(0,16)}</CardText>
          <input
            type="date"
            onChange={(e) => setToDate(e.target.value)}
            pattern="[0-9]{8}"
            required
            value={toDate}
          />
          <CardText>Method of Travel: {trip.travelType}</CardText>
          <input
            type="text"
            onChange={(e) => setTravelType(e.target.value)}
            required
            value={travelType}
          />
          <CardText>Reason for Trip: {trip.tripType}</CardText>
          <input
            type="text"
            onChange={(e) => setTripType(e.target.value)}
            required
            value={tripType}
          />
          <Button onClick={editTrip}  color="info" className="btnClick">Edit</Button>
          <Button onClick={deleteTrip}  color="info" className="btnClick">Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TripCard;
