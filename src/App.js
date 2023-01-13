import Expense from "./components/expenses/Expense";
import NewExpenses from "./components/newExpenses/NewExpense";

// ROOT COMPONENTS
function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2023, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2023, 5, 12),
        },
    ];

    // to communicate from NewExpense to App components
    const addExpenseHandler = (expenses) => {
        console.log("in app.js");
        console.log(expenses);
    };

    return (
        <div>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expense item={expenses} />
        </div>
    );
}

export default App;
