import { useState } from "react";

function AddTask(props) {
  const defaultTask = { title: "", description: "" };
  const [task, setTask] = useState(defaultTask);

  function submitTask() {
    if (!task.title) {
      alert("Informe o título da tarefa.")
      return;
    }

    props.onAddTask(task);
    setTask(defaultTask);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200  rounded-md shadow flex flex-col">
      <input
        value={task.title}
        onChange={(event) => setTask({ ...task, title: event.target.value })}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa"
      />
      <input
        value={task.description}
        onChange={(event) =>
          setTask({ ...task, description: event.target.value })
        }
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => submitTask()}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
