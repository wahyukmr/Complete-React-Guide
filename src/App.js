import React, { useEffect, useState } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHTTP from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHTTP();

    useEffect(() => {
        // fungsi ini dipanggil custom hook setiap kali mendapat respons
        const transformTask = (dataTask) => {
            const loadedTasks = [];

            for (const taskKey in dataTask) {
                loadedTasks.push({ id: taskKey, text: dataTask[taskKey].text });
            }

            setTasks(loadedTasks);
        };

        // fungsi adalah objek dalam javascript dan setiap kali fungsi di buat ulang (meskipun berisi logika yang sama) itu tetaplah sebuah objek, oleh karena itu useEffect akan memperlakukannya sebagai nilai baru yang akan dieksekusi kembali, meskipun secara teknis fungsinya sama. Untuk menghindari itu harus menggunkan useCallback.
        fetchTasks({ method: "GET" }, transformTask);
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
