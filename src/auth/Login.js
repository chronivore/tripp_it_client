import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import APIURL from '../helpers/environment'

 const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const handleSubmit = (event, errors, values) => {
        // event.preventDefault();
        // console.log(errors,values);

   if(errors.length === 0 ){
       console.log(APIURL);
       console.log(email, password);

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
                console.log(data.sessionToken);
                props.updateToken(data.sessionToken);
                console.log("User successfully logged in");
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <h3 className='titleHeaders'>Let's get going!</h3>
            <br/>
            <AvForm onSubmit={handleSubmit}>
            <AvField name="email" placeholder="Email" type="email" autoComplete="off" value={email}
             onChange={e => setEmail(e.target.value)}
            validate={{
                // pattern: {value: '^[A-Za-z0-9]+@+.', errorMessage: 'Your email must be composed only with letter and numbers'},
                 required: {value: true, errorMessage:"Please fill this field"}}} />
                <br />
                <AvField name="password" placeholder="Password" type="password" minLength="10" required
                autoComplete="off" onChange={e => setPassword(e.target.value)} value={password}
                 validate={{
                    minLength: {value: 4, errorMessage: 'Your password must be between 5 and 16 characters'},
                    maxLength: {value: 16, errorMessage: 'Your password must be between 5 and 16 characters'}
                }} />   
                <br />
                <Button color="primary" block type="submit">Login</Button>
            </AvForm>
        </div>
    )
}

export default Login;