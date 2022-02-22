import React,{useState} from 'react';
import ExpensesForm from './ExpenseForm';
import './NewExpense.scss';

function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const handleSavedExpense=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }
    const inputFormHandler = () => {
        setShowForm((prevSate) => !prevSate);
    }
    const stopEditingHandler=()=>{
        setShowForm(false);
    }
    return (
        <div className='expense-form-container'>
            {
             !showForm && <button className="expense-form__expand-button " onClick={inputFormHandler}>Add Expenses</button>
            }
            {
             showForm && <ExpensesForm onSaveExpense={handleSavedExpense} onCancel={stopEditingHandler}/>
            }
        </div>
    );
}

export default NewExpense;