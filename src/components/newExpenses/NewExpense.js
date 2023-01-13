import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpenses(props) {
    const saveExpenseDataHandler = (enterExpenseData) => {
        const expanseData = {
            ...enterExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expanseData);
    };

    return (
        <div className="new-expense">
            {/* added new Props to ExpenseForm to pass Expenses data to NewExpense. the value of this prop must be a function, which can be called in the ExpenseForm component */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpenses;
