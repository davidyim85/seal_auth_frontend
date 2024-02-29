import { Form } from "react-router-dom";

const Login = () => {
    return (
    <div>
        <h1>Login Form</h1>
        <Form action="/login" method="POST">
            <label>username</label>
            <input type='text' name='username' placeholder="username"/>

            <label>password</label>
            <input type='password' name='password' placeholder="password"/>
            
            <input type='submit' value='login'/>
        </Form>
    </div>
    )
}

export default Login;