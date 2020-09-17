import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './auth/Login';
import Auth from './auth/Auth';
import Homepage from './home/Homepage';
import NavBar from './home/NavBar';


function App(props) {
  const [sessionToken, setSessionToken] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  const clearToken =  () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (

    <div className={!sessionToken ? "loginPage" : "homePage"} >
      <NavBar clickLogout={clearToken} sessionToken={sessionToken} firstName={firstName} lastName={lastName} />
      <h1 id="tripp">tripp.it</h1>
      {!sessionToken ? 
      <Auth updateToken={updateToken} firstName={firstName} lastName={lastName} 
      setFirstName={setFirstName} setLastName={setLastName}/> 
      : 
      <Homepage sessionToken={sessionToken} clickLogout={clearToken}/>}
    </div>
  );
}

export default App;
