import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFormLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFormLS || [];
  })

  useEffect(() => {
    fetch('./backend/data/expenses.json')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);
  
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

export default App;
