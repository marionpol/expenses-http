import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DYMMY_EXPENSES= [{
  id: 'id1',
  date: new Date(2023, 9, 6),
  title: 'New book',
  amount: 30.99
},
{
  id: 'id2',
  date: new Date(2024, 0, 25),
  title: 'New jeans',
  amount: 99.99
},
{
  id: 'id3',
  date: new Date(2024, 3, 7),
  title: 'New bag',
  amount: 139.99
}

]

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES)

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
