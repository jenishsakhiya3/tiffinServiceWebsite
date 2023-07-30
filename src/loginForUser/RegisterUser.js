import React from "react";
import { Link } from "react-router-dom";
import '../loginForRest/loginRegister.scss';

function RegisterUser(){
    
    return(
        <>
            <nav>
                <label class="logo">tiFFin</label> 
            </nav>
            <h3>Register As User</h3>
            <form method="POST" action="/userReg">
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Username</label>
                    <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">ZIP Code</label>
                    <input type="text" name="zipcode" className="form-control" />
                </div>
                <button type="submit" className="btn btn-secondary btn-block mb-4">Sign in</button>
            </form>
        </>
    );
}
export default RegisterUser;