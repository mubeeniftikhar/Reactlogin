<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
=======
import React, { useState , useEffect} from 'react';
>>>>>>> cd912c0394a99ae47d041df91432369bcb29e76e

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log('set timer')
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length>6)
    },500)

  return ()=> {
    console.log('clean up')
    clearTimeout((identifier));
  }
  },[enteredEmail, enteredPassword])


  const emailChangeHandler = (event) => {setEnteredEmail(event.target.value);

<<<<<<< HEAD

=======
>>>>>>> cd912c0394a99ae47d041df91432369bcb29e76e
  };

  useEffect(() => {
    const Identifier = setTimeout(( )=> {
      console.log("checking validity");
      setFormIsValid(
          enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },400);
   return () => {
     console.log('cleanUp');
      clearTimeout(Identifier);
    };

  },[enteredEmail,enteredPassword])

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
<<<<<<< HEAD

=======
>>>>>>> cd912c0394a99ae47d041df91432369bcb29e76e
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
