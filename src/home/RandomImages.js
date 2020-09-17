import React, { useState, useEffect } from "react";
const baseUrl = "https://api.unsplash.com/search/collections";
const key = "cWWHbdry3jWwqN-oVfyv2PTba6XsO1bpU7KmiS-YJQo";
let pictureType = "adventure";//travel//time
let number_of_entries = 100;

const RandomImages = (props) => {
  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    let url = `${baseUrl}?query=${pictureType}&per_page=${number_of_entries}&client_id=${key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);

        for (let img of data.results) {
          // console.log(img.title);
          if (img.preview_photos.length > 0) {
            img.preview_photos.forEach((i) => {
              props.setArrImages((prev) => [...prev, i.urls.regular]);
              // console.log(i.urls.full);
            });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return <div></div>;
};
export default RandomImages;
