import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const currentYear = new Date().getFullYear().toString();

    const [selectedYear, setSelectedYear] = useState(currentYear);

    const updateSelectedYearHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            {/* same like this: <div className="Card expenses"></div> */}
            <Card className="expense">
                <ExpenseFilter
                    onSelectedYear={selectedYear}
                    onUpdateSelectedYear={updateSelectedYearHandler}
                />

                <ExpenseItem
                    // Add attribute in the custom element
                    name={props.item[0].title}
                    price={props.item[0].amount}
                    date={props.item[0].date}
                />
                <ExpenseItem
                    name={props.item[1].title}
                    price={props.item[1].amount}
                    date={props.item[1].date}
                />
                <ExpenseItem
                    name={props.item[2].title}
                    price={props.item[2].amount}
                    date={props.item[2].date}
                />
                <ExpenseItem
                    name={props.item[3].title}
                    price={props.item[3].amount}
                    date={props.item[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
