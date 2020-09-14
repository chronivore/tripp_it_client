import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


 const SignUp = (props) => {
     
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = ((event) => {
        event.preventDefault();
        console.log(firstName,lastName,email,password);

        fetch('http://localhost:4000/user/signup/', {
            method: "POST",
            body: JSON.stringify({
                user:{
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then( response => response.json())
        .then(data => {
            props.updateToken(data.sessionToken)
            console.log(data.sessionToken);
        })
        .catch(err => console.log(err))
    })
    return (
        <div>
            <h1>SignUp</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label htmlFor="firstName">First Name: </Label>
                    <Input name="firstName"  onChange={e => setFirstName(e.target.value)}
                    value={firstName}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name: </Label>
                    <Input name="lastName" onChange={e => setLastName(e.target.value)}
                    value={lastName}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label htmlFor="email">Email: </Label>
                    <Input name="email" onChange={e => setEmail(e.target.value)}
                    value={email}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input name="password" onChange={e => setPassword(e.target.value)}
                    value={password}/>
                </FormGroup>
                <br/>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}
export default SignUp;