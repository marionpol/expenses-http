import './Expenses.css'
import Card from'./UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './Expenses/ExpensesFilter'

const Expenses = (props) => {
    const filterYearHandler = (filteredYear) => {
        console.log('Year data in Expenses.js' + filteredYear)
    }
    return(
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterYearHandler}/>
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses