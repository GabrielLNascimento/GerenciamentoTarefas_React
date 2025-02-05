import { useNavigate, useSearchParams } from 'react-router-dom';

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-slate-500 p-6">
            <div className="bg-slate-100 p-6 rounded-md w-md m-auto text-center space-y-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg">{description}</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-slate-400 hover:bg-slate-500 text-white rounded-[6px] p-2 cursor-pointer text-left transition duration-300"
                >
                    Voltar
                </button>
            </div>
        </div>
    );
}

export default TaskPage;
