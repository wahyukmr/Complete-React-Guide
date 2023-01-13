import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
    // pendekatan jika yang dikembalikan oleh komponen adalah merubah seluruhnya berdasarkan kondisi yang berbeda
    if (
        props.filterByYears.length === 0 &&
        props.selectViewAll !== "View_all"
    ) {
        return <h2 className="expenses-list__fallback">Found No Expenses!!</h2>;
    }

    return (
        <ul className="expense-list">
            {props.filterByYears.length > 0 &&
                props.filterByYears.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        name={expense.title}
                        price={expense.amount}
                        date={expense.date}
                    />
                ))}

            {props.selectViewAll === "View_all" &&
                props.expenseAllItems.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        name={expense.title}
                        price={expense.amount}
                        date={expense.date}
                    />
                ))}
        </ul>
    );
}

export default ExpenseList;
