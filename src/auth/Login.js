import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

 const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/user/login/', {
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
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email: </Label>
                    <Input name="email" value={email}
                    onChange={ e => setEmail(e.target.value)}/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input name="password" value={password}
                     onChange={ e => setPassword(e.target.value)}/>
                </FormGroup>
                <br />
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;