import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { v4 } from "uuid";
import { useEffect, useState } from "react";

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onAddTask(taskInput) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        isCompleted: false,
        ...taskInput,
      },
    ]);
  }

  function onDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id != taskId));
  }

  function onTaskClick(taskId) {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) return { ...t, isCompleted: !t.isCompleted };
        else return t;
      })
    );
  }

  return (
    <main className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[450px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </main>
  );
}

export default App;
