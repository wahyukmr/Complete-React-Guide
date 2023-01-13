import React, { useState } from "react";

import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpense";

const DUMMY_eXPENSES = [
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

function App() {
    const [expenses, setExpenses] = useState(DUMMY_eXPENSES);

    const addExpenseHandler = (expense) => {
        // cannot update a State that depends on the previous State in this way
        // setExpenses([expense, ...expenses]);

        setExpenses((prevExpense) => {
            return [expense, ...prevExpense];
        });
    };

    return (
        <div>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expense items={expenses} />
        </div>
    );
}

export default App;
