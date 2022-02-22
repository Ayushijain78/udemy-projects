import React, { useState } from 'react';

import Card from "../UI/Card";
import './Expenses.scss';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const { expenseData } = props;
    const [expenseYear, setExpenseYear] = useState(2022);

    const filtererdYearExpenses = (expYear) => {
        setExpenseYear(expYear);
    }
    const filteredYearExpense = expenseData.filter(item => item.date.getFullYear().toString() === expenseYear)
    
    return (
        <Card className="expense-conatiner">
            <ExpenseFilter
                selectedYear={expenseYear}
                expenseData={expenseData}
                onFilterYearExpenses={filtererdYearExpenses}
            />
           <ExpensesList filteredExpense={filteredYearExpense}/>
        </Card>
    )
}
export default Expenses;
