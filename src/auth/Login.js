import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

 const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login/`, {
            method: 'POST',
            body: JSON.stringify({
                user:{
                    email: email,
                    password: password    
                }
            }),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        })
        .then( res => res.json())
        .then(data => {
            props.updateToken(data.sessionToken);
            console.log("User successfully logged in");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3 className='titleHeaders'>Let's get going!</h3>
            <br/>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <Label htmlFor="email">Email: </Label> */}
                    <Input name="email" value={email} placeholder="Email" type="email"
                    onChange={ e => setEmail(e.target.value)}/>
                </FormGroup>
                <br />
                <FormGroup>
                    {/* <Label htmlFor="password">Password: </Label> */}
                    <Input name="password" value={password} type="password" placeholder="Password"
                     onChange={ e => setPassword(e.target.value)}/>
                </FormGroup>
                <br />
                <Button color="primary" block type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;