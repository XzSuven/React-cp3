import "react";
import type { Task } from '../../types';
import TaskItem from "./TaskItem.tsx";

interface TaskBoardProps {
    tasks: Task[];
}

function TaskBoard({ tasks }: TaskBoardProps) {
    if (tasks.length === 0) {
        return <p>Задач нет</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskBoard;