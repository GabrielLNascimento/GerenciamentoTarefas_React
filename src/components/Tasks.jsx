import { ChevronRightIcon, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, taskDelete }) {
    const navigate = useNavigate();

    function onDetailsClick(task) {
        const query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-100 shadow rounded-md">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-[10px]">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 hover:bg-slate-500 w-full text-white rounded-[6px] p-2 cursor-pointer text-left transition duration-300 ${
                            task.isCompleted && 'line-through'
                        }`}
                    >
                        {task.title}
                    </button>

                    <button
                        onClick={() => onDetailsClick(task)}
                        className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-white cursor-pointer transition duration-300"
                    >
                        <ChevronRightIcon />
                    </button>

                    <button
                        onClick={() => taskDelete(task.id)}
                        className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-white cursor-pointer transition duration-300"
                    >
                        <Trash2 />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
