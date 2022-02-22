import React from 'react';

import './ExpensesItem.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpensesItem (props) {
    const date=props.date;
    const title=props.title;
    const amount=props.amount;
        return (
            <Card className='expense-item'>
                <ExpenseDate date={date}/>
                <div className='item-expense-description'>
                    <h2>{title}</h2>
                    <div className='item-expense-price'>$ {amount}</div>
                </div>
            </Card>
        );
    
}

export default ExpensesItem;
