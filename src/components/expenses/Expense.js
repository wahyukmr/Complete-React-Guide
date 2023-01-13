import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        // same like this: <div className="Card expenses"></div>
        <Card className="expense">
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
    );
}

export default Expenses;
