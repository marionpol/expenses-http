import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false);

    const startEditingHandler = () => {
        setEditForm(true);
    };

    const stopEditingHandler = () => {
        setEditForm(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditForm(false); 
    };

    return (
        <div className="new-expense">
            {!editForm && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {editForm && (                
                <div>
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
                    <button onClick={stopEditingHandler}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default NewExpense;