import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpenses(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expanseData = {
            ...enterExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expanseData);
    };

    const clickButtonHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={clickButtonHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onStopEditing={stopEditingHandler}
                />
            )}
        </div>
    );
}

export default NewExpenses;
