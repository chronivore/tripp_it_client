import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './auth/Login';
import Auth from './auth/Auth';
import Trips from './home/Homepage';

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

  const clearToken =  () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div>
      
      {!sessionToken ? <Auth updateToken={updateToken}/> : <Trips sessionToken={sessionToken} clickLogout={clearToken}/>}
    </div>
  );
}

export default App;
