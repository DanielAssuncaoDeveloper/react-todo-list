import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const nav = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)

    nav(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200  rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 text-left rounded-md w-full ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => props.onDeleteTask(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
