import React, {  } from 'react';
import './ExpenseFilter.scss';

function ExpenseFilter(props) {
    const {expenseData} =props;
    
    const handleYearFilter=(event)=>{
        props.onFilterYearExpenses(event.target.value);
    }
    return (
        <div className='expense-filter'>
            <label htmlFor="temp-id">Filter by year</label>
            <select onChange={handleYearFilter} value={props.selectedYear}>
                {
                    expenseData.map(item=>{
                        const year=item.date.getFullYear();
                        return(
                            <option value={year}>{year}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default ExpenseFilter;