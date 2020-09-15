import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './auth/Login';
import Auth from './auth/Auth';
<<<<<<< HEAD
import Home from './home/Homepage';
=======
>>>>>>> b992e4d5cd08e126644469a1f593f869574541c4
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

  // componentDidMount(){
  //   fetch(`${APIURL}/user`)
  //   .then(response => response.json())
  //   .then(user => this.setState({user}))
  // }

  return (
    <div>
<<<<<<< HEAD
      {!sessionToken ? <Auth updateToken={updateToken}/> : <Trips />}
=======
      {!sessionToken ? <Auth updateToken={updateToken}/> : <Trips sessionToken={sessionToken}/>}
>>>>>>> b992e4d5cd08e126644469a1f593f869574541c4
    </div>
  );
}

export default App;
