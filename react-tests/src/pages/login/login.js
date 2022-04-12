import React, { useState } from 'react'
import { resolvePath } from 'react-router-dom'
import '../../pages/login/login.css'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setUserPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        console.log('userName: ', userName)
        console.log('password: ', password)
        if (userName === 'admin' && password === 'admin') {
            console.log('Login success')
            window.location.href = '/home'
        }
    }

    return (
        <div id='root-div'>
            <div id='login-div'>
                <h1>Welcome</h1>
                <form>
                    <div>
                        <label className='custom-field'>
                            <input name='userName' type='text' onChange={event => setUserName(event.target.value)} required />
                            <span className='placeholder'>Username</span>
                        </label>
                    </div>
                    <div>
                        <label className='custom-field'>
                            <input name='password' type='password' onChange={event => setUserPassword(event.target.value)} required />
                            <span className='placeholder'>Password</span>
                        </label>
                    </div>
                    <button type='submit' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;