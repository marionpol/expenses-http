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
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses