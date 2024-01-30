import { useState } from 'react'
import './Expenses.css'
import Card from'./UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './Expenses/ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterYearHandler = (selectedYear) => {
        console.log('Year data in Expenses.js' + selectedYear)
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === +filteredYear
    });


    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear}
            onChangeFilter={filterYearHandler}/>
            {
                filteredExpenses.length === 0 && <p>No expenses found.</p>
            }
            { filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses