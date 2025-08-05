import { useNavigate, useSearchParams } from "react-router-dom";
import {ChevronLeftIcon} from 'lucide-react'

function TaskPage() {
  const nav = useNavigate()

  const [searchParams] = useSearchParams(); 
  const task = {
    title: searchParams.get("title"),
    description: searchParams.get("description"),
  };

  return (
    <main className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[450px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button className="absolute left-0 top-0 bottom-0 text-slate-100" onClick={() => nav(-1)}>
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{task.title}</h2>
          <p className="text-slate-600">{task.description}</p>
        </div>
      </div>
    </main>
  );
}

export default TaskPage;
