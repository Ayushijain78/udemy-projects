import React from 'react';
import './ExpenseDate.scss';
import PropTypes from 'prop-types';

//shift+option+F
function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    const year=props.date.getFullYear();
    return (
        <div className='expense-date-container'>
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    );
}

ExpenseDate.propTypes = {

};

export default ExpenseDate;