import React, { useState } from 'react';
import './ExpenseForm.scss';

function ExpensesForm(props) {
    const [enteredtTitle, setEnteredtTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
    // const [userInput, setUserInput] = useState({
    //     enteredtTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })
    const handleTitleChange = (event) => {
        // use this when state depends on prev state 
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredtTitle:event.target.value};
        // })
        setEnteredtTitle(event.target.value)
    }

    const handleDateChange = (event) => {
        setEnteredDate(event.target.value)
    }
    const handleAmountChange = (event) => {
        setEnteredAmount(parseInt(event.target.value));
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredtTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpense(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredtTitle('');
    }
  
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>date</label>
                        <input onChange={handleDateChange} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" />
                    </div>
                    <div className='new-expense__control'>
                        <label>title</label>
                        <input onChange={handleTitleChange} value={enteredtTitle} type="text" />
                    </div>
                    <div className='new-expense__control'>
                        <label>amount</label>
                        <input onChange={handleAmountChange} value={enteredAmount} type="number" min="0.01" step="0.01" />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button className='submit-button' type='submit'>Add Expense</button>
                    <button className='submit-button' type='submit' onClick={props.onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ExpensesForm;