export default function TaskList({tasks}) {

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? "completed" : "not-completed"}>
                    {task.description}
                </li>
            ))}
        </ul>
    );
}