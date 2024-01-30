import { useState } from 'react'
import './Expenses.css'
import Card from'./UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './Expenses/ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return filteredYear === '' || expense.date.getFullYear().toString() === filteredYear;
    });


    return(
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterYearHandler}/>
            {
                filteredExpenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses