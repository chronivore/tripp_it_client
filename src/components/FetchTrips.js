import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/environment';
import ListAllTrips from './ListAllTrips';

const FetchTrips = (props) => {
    const [trips, setTrips] = useState([]);

    // console.log('Fetch connected');

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
                for(const trip in tripsData){
                    setTrips[trip] = tripsData[trip];
                }
                // console.log(trips);
            })
            .catch(err => console.log(err));
    }

    useEffect (()=>{
        fetchTrips();
    },[]) 

    return(
        <div>
             <ListAllTrips trips={trips} sessionToken={props.sessionToken}/>
        </div>
    )
}

export default FetchTrips;