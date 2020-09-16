import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";
import { AvForm, AvField } from "availity-reactstrap-validation";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(firstName, lastName, email, password);

    fetch(`${APIURL}/user/signup/`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        console.log(data.sessionToken);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4 className="titleHeaders">Signup to plan your trips</h4>
      <br />

      <AvForm onSubmit={handleSubmit}>
        <AvField
          name="firstName"
          type="text"
          autoComplete="new"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          validate={{
            required: { value: true, errorMessage: "Please enter a name" },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your name must be composed only with letter and numbers",
            },
          }}
        />
        <br />
        <AvField
          name="lastName"
          type="text"
          autoComplete="new"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          validate={{
            required: { value: true, errorMessage: "Please enter a name" },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your name must be composed only with letter and numbers",
            },
          }}
        />
        <br />
        <AvField
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          validate={{
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
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
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
          Sign Up
        </Button>
      </AvForm>
    </div>
  );
};
export default SignUp;
