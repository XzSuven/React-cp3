import type { Task } from '../../types';
import {Link} from "react-router-dom";

interface TaskItemProps {
    task: Task;
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link> — {task.isCompleted ? 'выполнено' : 'не выполнено'}
        </li>
    );
}

export default TaskItem;