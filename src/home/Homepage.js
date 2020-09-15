import React, { useState, useEffect } from 'react';

const baseUrl = "https://api.unsplash.com/search/collections"
const key = "cWWHbdry3jWwqN-oVfyv2PTba6XsO1bpU7KmiS-YJQo";
let pictureType = "travel";
let number_of_entries = 100;

 const Home = (props) => {

    const fetchResults = () => {
        let url = `${baseUrl}?query=${pictureType}&per_page=${number_of_entries}&client_id=${key}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));

    }

    return (
        <div id="homeDiv">
            <h1>HOME</h1>
            {fetchResults()}
            
        </div>
    )
}
export default Home;