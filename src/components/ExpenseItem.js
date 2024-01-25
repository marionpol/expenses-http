import './ExpenseItem.css'
function ExpenseItem(props){
    console.log(props)

    return(<div className="expense-item">  
        <div>{props.expenseData.date.toString()}</div>
        <div className='expense-item_description'>
            <h2>{props.expenseData.title}</h2>
            <div>{props.expenseDataprice}</div>
        </div>
    </div>)
}

export default ExpenseItem;