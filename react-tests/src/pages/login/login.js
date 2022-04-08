import '../../pages/login/login.css'

function Login() {
    return (
        <div id='root-div'>
            <div id='login-div'>
                <h1>Welcome</h1>
                <form>
                    <input type='text' placeholder='Username' /><br />
                    <input type='password' placeholder='Password' /><br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;