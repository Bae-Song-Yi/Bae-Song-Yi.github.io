function ExpenseItem(){
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'TEst';
    return(
        <div>
            <div>Date : <span>{expenseDate.toISOString()}</span></div>
            <div>
                <h2>{expenseTitle}</h2>
                <div>Amount</div>
            </div>
        </div>
    );
}
export default ExpenseItem;