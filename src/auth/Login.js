import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import APIURL from "../helpers/environment";

const Login = (props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isError, setIsError] = useState(false);


  const handleSubmit = (event, errors, values) => {
    // event.preventDefault();
    if (errors.length === 0) {
      fetch(`${APIURL}/user/login/`, {
        method: "POST",
        body: JSON.stringify({
          user: {
            email: props.email,
            password: props.password,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("User does not exist");
          } else return res.json();
        })
        .then((data) => {
          console.log(data);
          props.updateToken(data.sessionToken);
          updateSessionName(`${data.user.firstName} ${data.user.lastName}`);
          console.log("User successfully logged in");
        })
        .catch((err) => alert(err));
    }
  };

  const updateSessionName = (newName) => {
    localStorage.setItem("newName", newName);
  };

  return (
    <div>
      <h3 className="titleHeaders">Let's get going!</h3>
      <br />
      <AvForm onSubmit={handleSubmit}>
        <AvField
          name="email"
          placeholder="Email"
          type="email"
          autoComplete="off"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          validate={{
            // pattern: {value: '^[A-Za-z0-9]+@+.', errorMessage: 'Your email must be composed only with letter and numbers'},
            required: { value: true, errorMessage: "Please fill this field" },
          }}
        />
        <br />
        <AvField
          name="password"
          placeholder="Password"
          type="password"
          minLength="10"
          required
          autoComplete="off"
          onChange={(e) => props.setPassword(e.target.value)}
          value={props.password}
          validate={{
            minLength: {
              value: 4,
              errorMessage: "Your password must be between 5 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 5 and 16 characters",
            },
          }}
        />
        <br />
        <Button color="primary" block type="submit">
          Login
        </Button>
      </AvForm>
    </div>
  );
};

export default Login;
