import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/environment';
import ListAllTrips from './ListAllTrips';

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
            { trips.length > 0 ? <ListAllTrips trips={trips}/> : <div>No Trips To Display!</div> }
        </div>
    )
}

export default FetchTrips;