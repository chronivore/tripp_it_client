import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './auth/Login';
import Auth from './auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  // componentDidMount(){
  //   fetch(`${APIURL}/user`)
  //   .then(response => response.json())
  //   .then(user => this.setState({user}))
  // }

  return (
    <div>
      <h1> This is AMruta</h1>
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
