import React, { useState, useRef } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";
import Wrapper from "../helpers/Wrapper"

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState()

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title : 'Invalid Input',
        message : 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }

    // '+' changed string into number
    if (+enteredUserAge < 1) {
      setError({
        title : 'Invalid age',
        message : 'Please enter a valid age (> 0)'
      })
      return;
    }

    // console.log(enteredUsername, enteredAge)

    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername("");
    // setEnteredAge("");

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = props =>{
    setError(null)
  }

  return (
    <Wrapper>
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}

          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
