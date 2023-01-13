import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
    const currentYear = new Date().getFullYear().toString();

    const [selectedExpense, setSelectedExpense] = useState(currentYear);

    const updateSelectedYearHandler = (year) => {
        setSelectedExpense(year);
    };

    const filterByYear = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedExpense;
    });

    return (
        <div>
            <Card className="expense">
                <ExpenseFilter
                    SelectedYear={selectedExpense}
                    onUpdateSelectedYear={updateSelectedYearHandler}
                />
                <ExpenseChart expenses={filterByYear} />

                <ExpenseList
                    filterByYears={filterByYear}
                    selectViewAll={selectedExpense}
                    expenseAllItems={props.items}
                />
            </Card>
        </div>
    );
}

export default Expenses;
