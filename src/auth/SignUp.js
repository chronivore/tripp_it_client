import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";
import { AvForm, AvField } from "availity-reactstrap-validation";

const SignUp = (props) => {

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(firstName, lastName, email, password);

    fetch(`${APIURL}/user/signup/`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: props.firstName,
          lastName: props.lastName,
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
          throw new Error("fetch error");
        } else return res.json();
      })
      .then((data) => {
        props.updateToken(data.sessionToken);
        // console.log(data.sessionToken);
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
          onChange={(e) => props.setFirstName(e.target.value)}
          value={props.firstName}
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
          onChange={(e) => props.setLastName(e.target.value)}
          value={props.lastName}
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
          value={props.email}
          autoComplete="off"
          onChange={(e) => props.setEmail(e.target.value)}
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
          value={props.password}
          autoComplete="off"
          onChange={(e) => props.setPassword(e.target.value)}
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

          <AvField name="passwordnew"  hidden/>   
        <br />
        <Button color="primary" block type="submit">
          Sign Up
        </Button>
      </AvForm>
    </div>
  );
};
export default SignUp;
