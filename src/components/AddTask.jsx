import { useState } from 'react';

function AddTask({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-slate-100 shadow rounded-md flex flex-col">
            <input
                type="text"
                className="bg-white border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
                placeholder="Digite o titulo da tarefa"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                type="text"
                className="bg-white border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
                placeholder="Digite a descrição da tarefa"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button
                onClick={() => {
                    // verificar se a tarefa nao esta vazia
                    if (!title.trim() || !description.trim()) return alert('Preencha todos os campos');

                    addTask(title, description)
                    setTitle('');
                    setDescription('');
                }}
                className="bg-slate-500 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-slate-600 transition transition-duration-300"
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;
