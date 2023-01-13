import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    // MULTPLE-STATE APPROCH.
    // we can have more than one STATE inside a component function, which will update them separately and manage them separately
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // is only a function that updates the value ( will always be a string )
    const titleChangehandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        // object in which to store the updated value
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        // Reset the update value again
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        // Two way binding: Assigns a new value to the initial input
                        value={enteredTitle}
                        onChange={titleChangehandler}
                    />
                    {/* the advantage of the on Change event is that we can use the same event for all types of input. For example for drop down */}
                    {/*same like this <input type="text"></input> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangehandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2024-12-31"
                        value={enteredDate}
                        onChange={dateChangehandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

    // // SINGLE-STATE APPROCH (ALternative way)
    // // This is a safer way to ensure that we are always operating on the latest state snapshot, so use this syntax every time a status update depends on the previous state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // const userinputHandler = (event) => {
    //     setUserInput((prevState) => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value,
    //     }));
    // };
    // // function titleChangehandler(event) {
    // //     setUserInput(prevState => {
    // //         return { ...prevState, enteredTitle: event.target.value };
    // //     });
    // // }
    // // function amountChangehandler(event) {
    // //     setUserInput(prevState => {
    // //         return { ...prevState, enteredAmount: event.target.value };
    // //     });
    // // }
    // // function dateChangehandler(event) {
    // //     setUserInput(prevState => {
    // //         return { ...prevState, enteredDate: event.target.value };
    // //     });
    // // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // object in which to store the updated value
    //     const expenseData = {
    //         title: userInput.enteredTitle,
    //         amount: userInput.enteredAmount,
    //         date: new Date(userInput.enteredDate),
    //     };

    //     console.log(expenseData);
    //     setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    // };

    // return (
    //     <form onSubmit={submitHandler}>
    //         <div className="new-expense__controls">
    //             <div className="new-expense__control">
    //                 <label>Title</label>
    //                 <input
    //                     type="text"
    //                     name="enteredTitle"
    //                     value={userInput.enteredTitle}
    //                     onChange={userinputHandler}
    //                 />
    //                 {/* the advantage of the on Change event is that we can use the same event for all types of input. For example for drop down */}
    //                 {/*same like this <input type="text"></input> */}
    //             </div>
    //             <div className="new-expense__control">
    //                 <label>Amount</label>
    //                 <input
    //                     type="number"
    //                     min="0.01"
    //                     step="0.01"
    //                     name="enteredAmount"
    //                     value={userInput.enteredAmount}
    //                     onChange={userinputHandler}
    //                 />
    //             </div>
    //             <div className="new-expense__control">
    //                 <label>Date</label>
    //                 <input
    //                     type="date"
    //                     min="2021-01-01"
    //                     max="2024-12-31"
    //                     name="enteredDate"
    //                     value={userInput.enteredDate}
    //                     onChange={userinputHandler}
    //                 />
    //             </div>
    //         </div>
    //         <div className="new-expense__actions">
    //             <button type="submit">Add Expense</button>
    //         </div>
    //     </form>
    // );
}

export default ExpenseForm;
