import "./ExpenseFilter.css";

function ExpenseFilter(props) {
    const selectedYearHandler = (event) => {
        props.onUpdateSelectedYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter</label>
                <select
                    value={props.SelectedYear}
                    onChange={selectedYearHandler}
                >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="View_all">View all</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
