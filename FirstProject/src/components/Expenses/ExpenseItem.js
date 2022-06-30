import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {

  // console.log('Expense Item evaluated by React') 
  // Executes 4 times bcoz we created 4 instances of ExpenseItem in Expenses, but when we click on button to update the value then it called for once and print one time above message.

  // this variable and function does not triggered again to execute whole code except changes in clickHandler() function and variable title. So when I click, only new variable and function lines will be triggered.
  // To overcome the problem not to trigger whole code, we've to import {useState} library.

  // const [title, setTitle] = useState(props.title) // first variable manage the initial value while second is used
                                                  // to update that value.

  // after using updating funtion i.e., setTitle() -> it will re-evaluated whole component function and update and display output on screen what we did changes.
  // re-evaulate that component only in which state was registered.
  // const clickHandler = () =>{
  //   // setTitle('Updated')
  //   console.log(title)
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button>  */}
      {/* If we add parenthesis here, then JS executes it when JSX code runs, and it is too early */}
    </Card>
  );
}

export default ExpenseItem