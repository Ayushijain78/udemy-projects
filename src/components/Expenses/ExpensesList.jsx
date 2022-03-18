import React from 'react';
import ExpensesItem from './ExpensesItem';

function ExpensesList(props) {
    const { items, expenseData } = props;
    
    return (
        <div>
            {
                items.length === 0 ?
                    <p>No data found</p> : items.map((expense) => {
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