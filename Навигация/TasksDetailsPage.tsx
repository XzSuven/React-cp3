import {useParams} from "react-router-dom";
import {Tasks} from "./data/tasks.ts";

function TaskDetailsPage() {
    const {id} = useParams<{id:string}>();

    const result = Tasks.find((task) => task.id === Number(id));
    if (!result) {
        return (
            <div>
                <h1>Task not found</h1>
            </div>
        )
    }
    return (
        <>
            <h1>{result.title}</h1>
            <p>{result.isCompleted ? 'Выполнено' : 'Не выполнено'}</p>
        </>

    )
}

export default TaskDetailsPage;