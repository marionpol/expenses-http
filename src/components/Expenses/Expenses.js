import { useState } from 'react'
import './Expenses.css'
import Card from'../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterYearHandler = (selectedYear) => {
        console.log('Year data in Expenses.js' + selectedYear)
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date (expense.date).getFullYear() === +filteredYear
    });

    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear}
            onChangeFilter={filterYearHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses