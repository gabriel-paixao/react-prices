import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  //Properties
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  //Functions
  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChange={yearChangeHandler}
      />
      <Card className="expenses">
        {expenses.map((ex) => (
          <ExpenseItem key={ex.id} expense={ex} />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
