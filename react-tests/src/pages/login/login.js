import '../../pages/login/login.css'

function Login() {
    return (
        <div id='root-div'>
            <div id='login-div'>
                <h1>Welcome</h1>
                <form>
                    <div>
                        <label className='custom-field'>
                            <input type='text' required />
                            <span class="placeholder">Username</span>
                        </label>
                    </div>
                    <div>
                    <label className='custom-field'>
                        <input type='password' required />
                        <span class="placeholder">Password</span>
                    </label>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;