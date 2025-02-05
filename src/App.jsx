import { useEffect, useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v4 } from 'uuid';

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            // PRECISO ATUALIZAR ESSA TAREFA
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }

            // CASO EU NAO PRECISE ATUALIZAR
            return task;
        });
        setTasks(newTasks);
    }

    function taskDelete(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }

    function addTask(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-3">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciamento de Tarefas!
                </h1>
                <AddTask addTask={addTask} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    taskDelete={taskDelete}
                />
            </div>
        </div>
    );
}

export default App;
