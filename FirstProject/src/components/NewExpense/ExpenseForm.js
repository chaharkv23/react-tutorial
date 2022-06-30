import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const[userInput,setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : ''
  // })

  const titleChangeHandler = (event) => {
    // 1st approach
    setEnteredTitle(event.target.value);

    // 2nd approach
    // if you schedule a lot of state updates at the same time,
    // you could be dependint on outdated or incorrect state snapshot through this approach.

    // setUserInput({
    //     ...userInput, // to avoid data loss of other two keys
    //     enteredTitle : event.target.value,
    // })

    // 3rd approach
    // but with this approach React guarantees us that the state snapshot that is in inner function
    // will always be the latest state snapshot, keeping all schedule state updates in mind.
    // Hence, use this approach when your state depends on previous state.

    // setUserInput((prevState)=>{
    //     return {
    //     ...prevState, enteredTitle : event.target.value };
    //     });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput, // to avoid data loss of other two keys
    //     enteredAmount : event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput, // to avoid data loss of other two keys
    //     enteredDate : event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault(); // JS Funtion to prevent page reload on submit.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };


    // console.log(expenseData);

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  // With the useState we can also use two way binding -> If we submit the form, data submitted and the text field 
  // will become empty again or come in their initial value.

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
