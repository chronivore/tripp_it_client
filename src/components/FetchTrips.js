import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/environment';

const FetchTrips = (props) => {

    console.log('Fetch connected');

    const fetchTrips = () => {
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
    }

    fetchTrips();

    return(
        <div>
        </div>
    )
}

export default FetchTrips;