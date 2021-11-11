import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {  
  //Properties
  const expense = props.expense;
  const [title, setTitle] = useState(expense.title);

  //Functions
  const clickHandler = () => {
    setTitle("Updated!");
  };

  //Html
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
