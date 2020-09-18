import React, { useState, useEffect } from 'react';
import { Fade } from 'reactstrap';
import APIURL from '../helpers/environment';
import TripCard from './TripCard';

const FetchTrips = (props) => {
    const [trips, setTrips] = useState([]);

    const fetchTrips = () => {
        fetch(`${APIURL}/trip/`, {
            method: "GET",
            headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.sessionToken
            }),
        })
            .then((res) => res.json())
            .then((tripsData) => {
                console.log(tripsData);
                
                setTrips(tripsData);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchTrips()
    }, [props.updatedList])
    

    return(
        <div>
            { trips.length > 0 ?
                trips.map((trip) => {
                  return <TripCard trip={trip} fetchTrips={fetchTrips} sessionToken={props.sessionToken} />
 })
 :
             <div>No Trips To Display!</div> }
        </div>
    )
}

export default FetchTrips;