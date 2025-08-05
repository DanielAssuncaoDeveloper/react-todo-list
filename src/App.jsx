import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { v4 } from "uuid";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar React",
      description: "Estudar os conceitos básicos de React",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar JavaScript",
      description: "Estudar os conceitos básicos de JavaScript",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar CSS",
      description: "Estudar os conceitos básicos de CSS",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar HTML",
      description: "Estudar os conceitos básicos de HTML",
      isCompleted: false,
    },
  ]);

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
