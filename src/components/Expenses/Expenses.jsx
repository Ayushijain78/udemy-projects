import React, { useState } from 'react';

import Card from "../UI/Card";
import './Expenses.scss';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const { expenseData } = props;
    const [filteredYear, setFilteredYear] = useState(2022);
    const filterChangeHandler = (selectYear) => {
        setFilteredYear(selectYear);
    }
  //  const filteredYearExpense = expenseData.filter(item => item.date.getFullYear().toString() === expenseYear || item==="all")
    const filteredExpenses = expenseData.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    return (
        <Card className="expense-conatiner">
            <ExpenseFilter
                selectedYear={filteredYear}
                expenseData={expenseData} 
                onFilterYearExpenses={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}
export default Expenses;
