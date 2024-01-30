import { useState } from 'react'
import './Expenses.css'
import Card from'../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterYearHandler = (selectedYear) => {
        console.log('Year data in Expenses.js' + selectedYear)
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === +filteredYear
    });

    let expensesContent = <p>No expenses found.</p>

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem expenseData={expense} key={expense.id}/>
        })
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear}
            onChangeFilter={filterYearHandler}/>
            {expensesContent}
        </Card>
    )
}

export default Expenses