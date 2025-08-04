import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar os conceitos básicos de React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Estudar os conceitos básicos de JavaScript",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar CSS",
      description: "Estudar os conceitos básicos de CSS",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar HTML",
      description: "Estudar os conceitos básicos de HTML",
      isCompleted: false,
    },
  ]);

  return (
    <main className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[450px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </main>
  );
}

export default App;
