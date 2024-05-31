import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const UserTasks = () => {
    const [userTasks, setUserTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserTasks() {
            const token = localStorage.getItem('token');
            console.log("token -> ", token);
            try {
                const response = await fetch('https://todo-api-b6p3.onrender.com/api/task/getusertasks', {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const taskToAdd = await response.json();
                setUserTasks(taskToAdd);
            } catch (error) {
                console.log(`error while getting users tasks`);
            }
        }
        getUserTasks();
    }, []);


    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');

        const res = await fetch(`https://todo-api-b6p3.onrender.com/api/task/deletetask/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await res.json();
        console.log(data);
        navigate('/tasks');
    }

    return (
        <div className="UserTasks w-full h-[100vh] flex flex-col items-center">
            {userTasks && userTasks.map((userTask, index) => {
                return (
                    <div className="UserTasks w-[70%] h-[150px] flex flex-col p-5   " key={index}>
                        <div className="head flex justify-between">
                            <h1 className="text-2xl font-semibold">{userTask.title}</h1>
                            <p className="font-light">19th Jan, 2024</p>
                        </div>
                        <p className="text-lg">{userTask.description}</p>
                        <div className="buttons flex gap-6 mt-3">
                            <a href={`/updatetask/${userTask._id}`}>
                                <button
                                className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[70px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white"
                                >
                                    Edit
                                </button>
                            </a>
                            <button
                                onClick={() => handleDelete(userTask._id)}
                                className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[70px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}

            <a href="/addtask">
                <button
                    className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[250px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white"
                >
                    Add More Tasks
                </button>
            </a>
        </div>
    )
}

export default UserTasks