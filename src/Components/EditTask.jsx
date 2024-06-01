import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = ({id}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [clicked, setClicked] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://todo-api-b6p3.onrender.com/api/task/gettask/${params.taskId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setTitle(data.title);
            setDescription(data.description)
        }
        getData();
    }, [])

    const handleClick = async () => {
        setClicked(true);
        const token = localStorage.getItem('token');
        const updatedData = {title, description}
        const res = await fetch(`https://todo-api-b6p3.onrender.com/api/task/edit/${params.taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedData)
        })
        const data = await res.json();
        console.log(data);
        navigate('/tasks');
    }

    return (
        <div className="w-full h-[100vh] flex flex-col items-center">
            <h1 className="text-4xl font-semibold mt-20">Update Task</h1>

            <div className="first flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Title</label>
                <input 
                    type="text" 
                    placeholder="Enter task" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="mt-1 block w-[100%] p-10 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
            </div>

            <div className="second flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Description</label>
                <textarea 
                    placeholder="Enter description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="mt-1 block w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows={3}
                />
            </div>
            <button onClick={handleClick} className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[250px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white mt-5">Update task</button>

            {clicked && <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>}
        </div>
    );
}

export default EditTask