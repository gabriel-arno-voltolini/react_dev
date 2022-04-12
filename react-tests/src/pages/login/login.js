import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../pages/login/login.css'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (userName === 'admin' && password === 'admin') {
            return <Link to='home' />
        }
    }

    return (
        <div id='root-div'>
            <div id='login-div'>
                <h1>Welcome</h1>
                <form>
                    <div>
                        <label className='custom-field'>
                            <input onChange={event => setUserName(event.target.value)} type='text' required />
                            <span class="placeholder">Username</span>
                        </label>
                    </div>
                    <div>
                        <label className='custom-field'>
                            <input onChange={event => setPassword(event.target.value)} type='password' required />
                            <span class="placeholder">Password</span>
                        </label>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;