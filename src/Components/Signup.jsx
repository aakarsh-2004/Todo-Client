import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {

        try {
            const user = {name, username, password};
            const response = await fetch('https://todo-api-b6p3.onrender.com/api/user/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if(response) {
                console.log(response);
                navigate('/signin');
            } 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-[100vh] flex flex-col items-center">
            <h1 className="text-4xl font-semibold mt-20">Signup</h1>

            <div className="first flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Name</label>
                <input 
                    type="text" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="mt-1 block w-[100%] p-10 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
            </div>

            <div className="second flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Username</label>
                <input 
                    type='text'
                    placeholder="Enter username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="mt-1 block w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
            </div>
            <div className="third flex flex-col w-[30%]">
                <label className="mt-10 text-lg">Password</label>
                <input 
                    type='password'
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="mt-1 block w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
            </div>
            <button onClick={handleClick} className="border-2 border-gray-500 transition-all ease-in-out duration-200 w-[250px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white mt-5">Signup</button>
        </div>
    )
}

export default Signup;