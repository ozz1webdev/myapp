import React, { useState } from 'react'
import axios from 'axios';

function Test() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState('');

    function handlechange (e) {
        e.preventDefault();
        
        if (e.target.name == "usernameBox") {
            setUsername(e.target.value);
        }
        if (e.target.name == "passwordBox") {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://debian:8000/api/token/",{
                username: username,
                password: password
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            if (response == 200) {
                setMessage("Login Suceess");
                localStorage.set("access_token", response.data.access);
                localStorage.set("refresh_token", response.data.refresh);
            }
            else {
                setMessage("Something goes Wrong !");
            }
            
        }catch(error) {
            console.log(error);
            alert(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="usernameBox"
                        value={username}
                        onChange={handlechange}
                        placeholder="Username"
                    />
                </label>
                    <br></br>
                <label>
                    Password
                    <input
                        type="password"
                        name="passwordBox"
                        value={password}
                        onChange={handlechange}
                        placeholder="Password"
                    />
                </label>
                <br></br>
                <input type="submit" value="Login" />
            </form>

            <h1>Message: {message} </h1>
        </>
    );
}

export default Test;
