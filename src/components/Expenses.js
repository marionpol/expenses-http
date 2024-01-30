import './Expenses.css'
import Card from'./UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './Expenses/ExpensesFilter'

const Expenses = (props) => {

    return(
        <Card className='expenses'>
            <ExpensesFilter expenseData={props.expenses[2]}/>
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses