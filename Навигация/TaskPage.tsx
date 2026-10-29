import TaskBoard from "./TaskBoard.tsx";
import {Tasks} from "./data/tasks.ts";

export default function TaskPage() {
    return (
        <div>
            <TaskBoard tasks={Tasks}/>
        </div>
    )
}