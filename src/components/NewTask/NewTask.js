import useHTTP from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP();

    const createdTasks = (textFromInput, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: textFromInput };

        props.onAddTask(createdTask);
    };

    const enterTaskHandler = async (textFromInput) => {
        // Kita tidak perlu bekerja pada useCallback atau semacamnya disini karena hanya memanggil fungsi sendTaskRequest di enterTaskHandler, bukan di dalam useeffects atau semacamnya. Oleh karena itu disini tidak akan mengalami masalah infinite loop karena request ini tidak akan dikirim setiap kali komponen dievaluasi ulang, tetapi hanya saat fungsi ini berjalan.
        sendTaskRequest(
            {
                method: "POST",
                body: { text: textFromInput },
                headers: {
                    "Content-Type": "application/json",
                },
            },
            // Argument kedua yang diberikan ke method bind akan menjadi argument pertama yang diterima fungsi createdTasks
            createdTasks.bind(null, textFromInput)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
