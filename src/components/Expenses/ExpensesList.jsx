import React from 'react';
import ExpensesItem from './ExpensesItem';

function ExpensesList(props) {
    const { filteredExpense } = props;
    return (
        <div>
            {
                filteredExpense.length === 0 ?
                    <p>No data found</p> : filteredExpense.map((expense) => {
                        const amount = expense.amount;
                        const title = expense.title;
                        const date = expense.date;
                        const id = expense.id
                        return (
                            <ExpensesItem
                                key={id}
                                amount={amount}
                                title={title}
                                date={date}
                            />
                        )
                    })}
        </div>
    );
}

export default ExpensesList;