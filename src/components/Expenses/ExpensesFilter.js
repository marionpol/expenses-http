import React from 'react';
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select>
                    <option onChange='2023'>2023</option>
                    <option onChange='2024'>2024</option>
                    <option onChange='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;