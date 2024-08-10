import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

function Login({ setProfile }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser } = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault();

       
        if (username.trim() === "" || password.trim() === "") {
            setError("Username and password are required");
            return;
        }

        setUser({ username, password });
        setProfile(true); 
    }

    return (
        <div className='flex flex-col items-center mt-12 '>
            <div className='flex flex-col items-center w-72 bg-slate-500 rounded-md p-12 gap-6 text-white '>
                <h2>Login</h2>

                <input
                    className='bg-slate-500 pl-2 shadow-inner border-2 p-1 rounded-sm'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setError(""); 
                    }}
                    type="text"
                    placeholder='Username'
                />

                <input
                    className='bg-slate-500 pl-2 shadow-inner border-2 p-1 rounded-sm'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                    type="password"
                    placeholder='Password'
                />

                <button onClick={handelSubmit}>Submit</button>

              
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>
        </div>
    )
}

export default Login
