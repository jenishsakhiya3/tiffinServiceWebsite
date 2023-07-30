import React from 'react';
import { Link } from 'react-router-dom';
import './loginRegister.scss'

function Login() {
    return (
        <>
            <nav>
                <label class="logo">tiFFin</label> 
            </nav>
            <h3>Login As Restaurant</h3>
            <form method="POST" action='/restLog'>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Username</label>
                    <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>
                    <div className="col">
                        <Link to="#!">Forgot password?</Link>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary btn-block mb-4">Log in</button>
                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    <p>or sign up with:</p>
                </div>
            </form>
        </>
    );
}
export default Login;