import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleClick = async () => {
        const addTask = { title, description };
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('https://todo-api-b6p3.onrender.com/api/task/add', {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(addTask)
            });

            const data = await response.json();
            console.log('Response:', data);
            navigate('/tasks');


            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error adding task via React:', error);
        }
    };

    return (
        <div className="w-full h-[100vh] flex flex-col items-center">
            <h1 className="text-4xl font-semibold mt-20">Add Tasks</h1>

            <div className="first flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Title</label>
                <input 
                    type="text" 
                    placeholder="Enter task" 
                    value={title} 
                    onChange={handleTitleChange} 
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
                    onChange={handleDescriptionChange} 
                    className="mt-1 block w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows={3}
                />
            </div>
            <button onClick={handleClick} className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[250px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white mt-5">Add task</button>
        </div>
    );
};

export default AddTask;
