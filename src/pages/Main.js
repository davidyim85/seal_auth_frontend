
//welcome
//signup form
//login form
import { Link, Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <h1>Welcome to the people application</h1>
            <h3>Do you want to sign up?</h3>
            <Link to='/signup'><button>Signup</button> </Link>

            <h3>Do you want to login up?</h3>
            <Link to='/login'><button>Login</button> </Link>
            <Outlet />
        </div>
    )
}

export default Main;