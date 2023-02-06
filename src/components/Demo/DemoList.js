import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

function DemoList(props) {
    const { items } = props;

    const sortedList = useMemo(() => {
        console.log("Items sorted");
        return items.sort((a, b) => a - b);
    }, [items]);
    console.log("DemoList RUNNING");

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// React.memo tidak membuat komponen di eksekusi setiap kali seluruh komponen di evaluasi ulang
export default React.memo(DemoList);
